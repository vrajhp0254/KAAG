import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Use useNavigate here to navigate after login

  const handleLogin = () => {
    login(password); // Call login function from AuthContext
    if (password === "Kaag@1491") {
      navigate("/addproducts"); // Redirect to protected route after successful login
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Admin Login</h2>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={handleLogin}
      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Login
    </button>
  </div>
</div>

  );
};

export default AdminLogin;
