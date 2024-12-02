import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 w-full transition-all duration-300 ease-in-out  ${
        isScrolled
          ? 'bg-white h-16 shadow-lg'
          : 'bg-white bg-opacity-50 h-20'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <img
          src={logo}
          className={`transition-all duration-300 ease-in-out p-1 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
          alt="Logo"
        />
        <nav className="space-x-6 text-2xl ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-b-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-b-blue-600" : "hover:text-blue-600"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-b-blue-600" : "hover:text-blue-600"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-b-blue-600" : "hover:text-blue-600"
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
