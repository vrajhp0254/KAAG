import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/products/Products";
import AddProductForm from "./admin/AddProducts";

// Create Product Context
function App() {

  return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            {/* Protect the Add Product page */}
            <Route path="/addproducts" element={<AddProductForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
