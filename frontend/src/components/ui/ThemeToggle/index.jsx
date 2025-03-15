// src/components/ThemeToggle/index.jsx
import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import ThemeToggleWrapper from './styles';


const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeToggleWrapper onClick={toggleTheme}>
      {theme.name === 'light' ? 'Dark Mode' : 'Light Mode'}
    </ThemeToggleWrapper>
  );
};

export default ThemeToggle;