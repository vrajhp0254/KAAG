import React, { createContext, useState, useContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (password) => {
    if (password === "Kaag@1491") {
      setIsAdmin(true); // Set admin status
    } else {
      alert("Incorrect password!");
    }
  };

  const logout = () => {
    setIsAdmin(false); // Remove admin status
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => useContext(AuthContext);
