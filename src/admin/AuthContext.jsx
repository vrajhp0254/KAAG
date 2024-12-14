import React, { createContext, useState, useContext, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider to wrap the app
export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isAdmin') === 'true';
  });

  const login = (password) => {
    // You should use environment variables for sensitive data
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  // Clear admin status when window is closed
  useEffect(() => {
    const handleTabClose = () => {
      localStorage.removeItem('isAdmin');
    };

    window.addEventListener('beforeunload', handleTabClose);
    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
