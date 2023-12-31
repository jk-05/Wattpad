import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const users = await response.json();
      const foundUser = users.find((user) => user.email === email);

      if (!foundUser) {
        setError('User not found. Please check your email.');
        return;
      }

      if (foundUser.password !== password) {
        setError('Incorrect password. Please try again.');
        return;
      }

      setError('');
      setLoggedInUser(foundUser);
      console.log('Login successful:', foundUser);
    } catch (error) {
      setError('Error fetching user data');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, error, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
