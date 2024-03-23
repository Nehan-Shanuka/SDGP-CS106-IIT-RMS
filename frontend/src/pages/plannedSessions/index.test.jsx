import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PlannedSessions from './PlannedSessions'; 
import mockAxios from 'jest-mock-axios';
import userEvent from '@testing-library/user-event';

afterEach(() => {
  mockAxios.reset();
});

describe('PlannedSessions Component', () => {
  it('fetches and displays buildings on initial render', async () => {
   
    const buildingsResponse = [
      { id: 1, name: 'Building 1' },
      { id: 2, name: 'Building 2' },
    ];
    mockAxios.get.mockResolvedValueOnce({ data: buildingsResponse });

    render(<PlannedSessions isSidebarOpen={true} />);

    
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:5555/buildings'));

    
    expect(screen.getByText('Building 1')).toBeInTheDocument();
    expect(screen.getByText('Building 2')).toBeInTheDocument();
  });

  it('updates reservations based on selected criteria', async () => {
    const reservationsResponse = [
      
    ];
    mockAxios.get.mockResolvedValueOnce({ data: reservationsResponse });

    render(<PlannedSessions isSidebarOpen={true} />);

    
    const selectLocation = screen.getByRole('combobox', { name:i });
    userEvent.selectOptions(selectLocation, ['Building 1']);

   
    // Wait for axios to be called with updated parameters
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(2));

  });
});
