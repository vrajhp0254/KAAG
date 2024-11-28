import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import AddProductForm from './pages/AddProducts';
import AdminLogin from './admin/AdminLogin';
import ProtectedRoute from './admin/ProtectedRoute';

// Create Product Context
export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<AdminLogin />} />
            {/* Protect the Add Product page */}
            <Route
              path="/addproducts"
              element={
                <ProtectedRoute>
                  <AddProductForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
