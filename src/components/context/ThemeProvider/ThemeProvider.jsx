import React, { createContext, useState} from 'react';
import UserProvider from '../UserProvider/UserProvider';

export const ThemeContext = createContext({});


const ThemeProvider = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const theme = {
    isDarkTheme: isDarkTheme,
    toggleTheme: toggleTheme
  }

  return ( // spacifies the children that can access the value of ThemeProvider
    <ThemeContext.Provider value={theme}>
      <UserProvider />           
    </ ThemeContext.Provider>
  )
}

export default ThemeProvider
