import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// ProtectedRoute component to check if the user is admin
const ProtectedRoute = ({ element }) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/admin-login" />;
  }

  return element;
};

export default ProtectedRoute;
