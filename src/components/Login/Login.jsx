import React, { useContext } from 'react';
import { Link, useNavigate } from '@reach/router';
import { UserContext } from '../context/UserProvider/UserProvider';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';

const Login = () => {

  const provider = new GoogleAuthProvider();

  const navigate = useNavigate()

  const auth = getAuth();
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  const userContext = useContext(UserContext);

  // 1. Put in some inputs and gather their values on submit
  const handleSubmit = (e) => {
    // 2. Stop the page from refreshing - default behaviour of a for is to refresh page
    e.preventDefault();

    // 3. Gather theit input details. Target is an array, as it's a form containing several elements
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    signInWithEmailAndPassword(getAuth(app), email, password).then(response => {
      userContext.setUser(response.user.email);
      alert('Welcome back to our app')
      navigate('/');
    }).catch(e => {
      alert('Sorry something went wrong')
    })
  }

  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    emailAddress: ""
  })
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='email...' />
      <input type="text" placeholder='password...' />
      <button type='submit'>Sign In</button>

    </form>
  )
}

export default Login
