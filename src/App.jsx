import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import PropTypes from 'prop-types';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<ProtectedRoute element={<AddProductForm />} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ConditionalLayout>
      </Router>
    </AuthProvider>
  );
}

function ConditionalLayout({ children }) {
  const location = useLocation();

  // Update the condition to handle all admin routes
  if (location.pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

ConditionalLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;

