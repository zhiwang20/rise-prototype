import React from "react";

const ConnectionContext = React.createContext();

function ConnectionProvider({ children }) {
  // The establishConnection function returns a promise that resolves to
  // a connection object. Provide this promise directly (instead of
  // waiting for it to resolve) so that the app can render right away.
  const connection = "This placeholder represents the connection object"; // establishConnection();

  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
}

export { ConnectionProvider };
export default ConnectionContext; // Provides a promise. Use like this: const connection = await useContext(ConnectionContext);
