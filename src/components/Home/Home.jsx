import React, { useContext } from "react";
import { Link } from '@reach/router';
import { UserContext } from "../context/UserProvider/UserProvider";
import { ThemeContext } from "../context/ThemeProvider/ThemeProvider";

const Home = () => {
  const data = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  console.log("Component running")
  console.log(data.user);

  return (
    <main className={themeContext.isDarkTheme ? "dark" : "light"}>
      <h1>Welcome!</h1>
      <h3>Please login to continue</h3>
      <Link to='login'><button>Login</button></Link>
      {/* <p>John Smith!</p> */}
      <p>{data.user}</p>
    </main>
  );
};

export default Home;
