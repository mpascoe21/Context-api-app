import React from 'react';
//import UserProvider from './components/context/UserProvider/UserProvider';
import ThemeProvider from './components/context/ThemeProvider/ThemeProvider';
import './App.css';

const App = () => {
  return (
    <div>
      {/* <UserProvider /> */}
      <ThemeProvider />
    </div>
    
  );
}

export default App;
