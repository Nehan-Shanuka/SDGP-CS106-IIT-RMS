import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Grouptimetable from './Grouptimetable';

describe('Grouptimetable component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Grouptimetable />);
    expect(getByText('CS-A')).toBeInTheDocument(); // Assuming 'CS-A' is part of the labels
  });

  it('renders BasicSelect and WeeklyallTimetable components', () => {
    const { getByTestId } = render(<Grouptimetable />);
    expect(getByTestId('basic-select')).toBeInTheDocument();
    expect(getByTestId('weekly-timetable')).toBeInTheDocument();
  }); 

});