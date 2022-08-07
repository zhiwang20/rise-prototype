import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function register(data) {
    // placeholder implementation
    console.log("register");
    setUser(data);
    return data;
  }

  function login(data) {
    // placeholder implementation
    console.log("login");
    setUser(data);
    return data;
  }

  function logout() {
    // placeholder implementation
    console.log("logout");
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{user, setUser, register, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
