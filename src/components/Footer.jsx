import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
  <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
    {/* About Section */}
    <div>
      <img className="h-28 my-2" src={logo} alt="KAAG IMPEX Logo" />
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
          <a href="/" className="text-md hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className=" text-md hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="/Product" className="text-md hover:underline">
            Product
          </a>
        </li>
        <li>
          <a href="/contact" className=" text-md hover:underline">
            Contact Us
          </a>
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
        <a href="https://www.facebook.com" className="text-white text-2xl hover:text-blue-500 ">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" className="text-white text-2xl hover:text-blue-700">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" className="text-white text-2xl hover:text-pink-500">
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
