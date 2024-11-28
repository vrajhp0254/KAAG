import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin');

  if (!isAdmin) {
    // If not authenticated, redirect to admin login
    return <Navigate to="/admin" />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
