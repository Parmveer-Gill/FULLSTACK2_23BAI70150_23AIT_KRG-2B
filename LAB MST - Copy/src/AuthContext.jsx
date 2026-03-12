import React, {createContext, useState} from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login}}>
      {children}
    </AuthContext.Provider>
  );
};