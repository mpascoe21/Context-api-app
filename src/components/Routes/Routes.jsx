import React from 'react';
import { Router } from '@reach/router';

import Home from '../Home/Home';
import Login from '../Login/Login';


const Routes = () => {
  return (
    <Router>
      <Home path='/' />            
      <Login path='login' />
    </Router>
  )
}

export default Routes
