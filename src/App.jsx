import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/products/Products";
import AddProductForm from "./admin/AddProducts";
import ProtectedRoute from "./admin/ProtectedRoute"; // Import the ProtectedRoute component
import { AuthProvider } from "./admin/AuthContext"; // Import AuthProvider
import AdminLogin from "./admin/AdminLogin"; // Admin login page

function App() {
  return (
    <AuthProvider>
      <Router>
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            {/* Protect the Add Product page */}
            <Route
              path="/admin"
              element={<ProtectedRoute element={<AddProductForm />} />}
            />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </ConditionalLayout>
      </Router>
    </AuthProvider>
  );
}

function ConditionalLayout({ children }) {
  const location = useLocation();

  // Exclude header and footer for specific pages
  if (location.pathname === '/admin' || location.pathname === '/admin-login') {
    return <>{children}</>; // Only render the children (without header/footer)
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default App;
