import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-lg px-28">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-600">GlobalTrade</h1>
        <nav className="space-x-6 text-2xl ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
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
