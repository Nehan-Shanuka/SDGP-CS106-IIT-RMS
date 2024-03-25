/* eslint-disable no-undef */
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Authenticator from './Authenticator'; 
import * as firebaseAuth from 'firebase/auth';

// Mock module for firebase/auth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
}));

describe('Authenticator Component', () => {
  const mockUserOnBoard = jest.fn();

  beforeEach(() => {
    firebaseAuth.signInWithPopup.mockClear();
    mockUserOnBoard.mockClear();
  });


  it('renders without crashing', () => {
    render(<Authenticator userOnBoard={mockUserOnBoard} />);
    expect(screen.getByText('LOGIN WITH GOOGLE')).toBeInTheDocument();
  });


  it('initiates Google sign in when button is clicked', async () => {
    const user = {
      user: {
        email: 'test@gmail.com',
      },
    };

    firebaseAuth.signInWithPopup.mockResolvedValue(user);

    render(<Authenticator userOnBoard={mockUserOnBoard} />);
    const button = screen.getByText('LOGIN WITH GOOGLE');
    fireEvent.click(button);
    await waitFor(() => expect(firebaseAuth.signInWithPopup).toHaveBeenCalled());
  });


  it('calls userOnBoard with user data for valid email domains', async () => {
    const validUser = {
      user: {
        email: 'test@iit.ac.lk',
      },
    };

    firebaseAuth.signInWithPopup.mockResolvedValue(validUser);

    render(<Authenticator userOnBoard={mockUserOnBoard} />);
    const button = screen.getByText('LOGIN WITH GOOGLE');
    fireEvent.click(button);

    await waitFor(() => expect(mockUserOnBoard).toHaveBeenCalledWith(validUser.user));
  });

  it('does not call userOnBoard for invalid email domains', async () => {
    const invalidUser = {
      user: {
        email: 'test@invalid.com',
      },
    };

    window.alert = jest.fn(); // Mock window.alert
    firebaseAuth.signInWithPopup.mockResolvedValue(invalidUser);

    render(<Authenticator userOnBoard={mockUserOnBoard} />);
    const button = screen.getByText('LOGIN WITH GOOGLE');
    fireEvent.click(button);

    await waitFor(() => expect(mockUserOnBoard).not.toHaveBeenCalled());
    expect(window.alert).toHaveBeenCalledWith('Please use your IIT email to login!');
  });
});
