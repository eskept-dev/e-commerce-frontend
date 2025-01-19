import React, { createContext, useContext } from 'react';
import { lightTheme } from '../themes';
import { Theme } from '../type';

export const ThemeContext = createContext(lightTheme);

type ThemeProviderProps = {
  theme?: Theme;
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme = lightTheme, children }) => (
  <ThemeContext.Provider value={theme}> 
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);