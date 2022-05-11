import React, { useContext } from 'react';
import { Link } from '@reach/router';

import NavMenu from '../NavMenu/NavMenu';
//import styles from './Nav.module.scss';
import { ThemeContext } from '../context/ThemeProvider/ThemeProvider';

const Nav = () => {

  const themeContext = useContext(ThemeContext);

  return (
    <nav className={themeContext.isDarkTheme ? "dark" : "light"}>
      <Link to='/'><h1>MazinApp</h1></Link>
      <button onClick={themeContext.toggleTheme}>Change Theme</button>
      {/* <Link to='login'><button>Login</button></Link> */}
      <NavMenu />
    </nav>
 
  )
}

export default Nav
