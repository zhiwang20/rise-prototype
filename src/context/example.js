// This is an example of how to use AuthContext.

// For a nice introduction to the Context API and the useContext hook, see these links:
//   https://daveceddia.com/context-api-vs-redux/
//   https://daveceddia.com/usecontext-hook/

// make sure to import useContext and AuthContext
import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext';

function AuthExample() {
  // The value provided by AuthContext is an object with the following properties:
  const {
    user,       // an object with data about the currently logged in user
    setUser,    // a function to update the user property
    register,   // a function to register a new user and update the user property
    login,      // a function to log in and update the user property
    logout      // a function to log out and update the user property
  } = useContext(AuthContext);

  // For example...

  const [inputName, setInputName] = useState("");

  function handleLogin() {
    // I'm sure login() will need more data once it is properly implemented
    login({ name: inputName });
  }

  return (
    <div>
      <h3>Hey, I'm logged {user ? `in as ${user.name}` : "out"}.</h3>
      <br/>
      <input type="text" onChange={(e) => setInputName(e.target.value)}/>
      <button onClick={handleLogin}>Log In</button>
      <br/>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

// Feel free to see it in action by putting this component on a page somewhere
// in your local copy of the repo.
export default AuthExample;
