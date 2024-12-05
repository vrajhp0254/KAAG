import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed z-50 w-screen transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg h-16" : "bg-white bg-opacity-50 h-20"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full relative">
        {/* Logo */}
        <a href="/">
        <img
          src={logo}
          className={`transition-all duration-300 ease-in-out p-1 ${
            isScrolled ? "h-12" : "h-16"
          }`}
          alt="Logo"
        /></a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl focus:outline-none absolute right-6 top-1/2 transform -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span>&#x2715;</span> // Cross icon for close
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 w-3/4 h-screen bg-white font-semibold flex flex-col items-center space-y-8 text-xl transition-transform duration-300 ease-in-out lg:static lg:flex-row lg:space-y-0 lg:space-x-6 lg:h-auto lg:bg-transparent ${
            isMenuOpen
              ? "translate-x-0 justify-center bg-opacity-90"
              : "-translate-x-full lg:translate-x-0 justify-end"
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600"
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
