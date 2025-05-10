
import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
  <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
    {/* About Section */}
    <div>
      <img className="h-28 my-4" src={logo} alt="KAAG IMPEX Logo" />
      <h3 className="text-xl font-bold mb-4">About Us</h3>
      <p className="text-sm text-justify">
        We provide seamless import-export solutions to connect businesses
        worldwide. Trust us to deliver your trade goals with efficiency and
        expertise.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <NavLink to="/" className="text-md hover:underline">
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/products" className="text-md hover:underline">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/brochures" className="text-md hover:underline">
          Brochures
          </NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className="text-md hover:underline">
          Certificates
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className=" text-md hover:underline">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className=" text-md hover:underline">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      <p className="text-md mb-2">3-81, ff, Tulsi complex, Himmatnagar, Gujarat, India</p>
      <p className="text-md mb-2">Gopal Trivedi – (+91)9039666969</p>
      <p className="text-md mb-2">Kishan R Patel – (+91)9033497418</p>
      <p className="text-md mb-4">Email: info@kaagimpex.com</p>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a href="https://www.facebook.com/profile.php?id=61576185953100" className="text-white text-2xl hover:text-blue-500 ">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/company/kaag-impex-pvt-ltd/" className="text-white text-2xl hover:text-blue-700">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/kaagimpex/" className="text-white text-2xl hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Footer */}
  <div className="mt-8 text-center border-t border-gray-700 pt-4">
    <p className="text-sm">
      © {new Date().getFullYear()} KAAG IMPEX Pvt Ltd. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
