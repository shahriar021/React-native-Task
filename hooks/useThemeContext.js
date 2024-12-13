// ThemeContext.js
import React, {createContext, useState, useContext} from 'react';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  // Detect system theme (dark or light)
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
