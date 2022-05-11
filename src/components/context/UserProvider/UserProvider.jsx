import React, { createContext, useState } from 'react';

import Routes from '../../Routes/Routes';
import Nav from '../../Nav/Nav';

// Context - the way the data is passed around through the app
export const UserContext = createContext({}); 

const UserProvider = () => { // Userprovider is providing information for it's children components
  // const currentUser = {
  //   name: "John Doe"
  // }

  // const [user, setUser] = useState(currentUser);

  const [user, setUser] = useState('');

  const data = {
    user: user,
    setUser: setUser
  }

  return ( // value is passed to ALL descendants AND all their children
    <UserContext.Provider value={data}> 
      <Nav />
      <Routes />
    </ UserContext.Provider>
  )
}

export default UserProvider

// SEE MODULE 7 CHALLENGE  
