import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider/UserProvider';

const NavMenu = () => {

  const data = useContext(UserContext);

  return (
    <ul>
      <li>{data.user}</li>
    </ul>
  )
}

export default NavMenu
