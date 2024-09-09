import React from 'react';
import { AlertProvider } from './AlertContext';
import { ThemeProvider } from './ThemeContext';

export const ParentProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AlertProvider>
        {children}
      </AlertProvider>
    </ThemeProvider>
  );
};