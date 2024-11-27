import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We provide seamless import-export solutions to connect businesses
            worldwide. Trust us to deliver your trade goals with efficiency and
            expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">123 Trade Street, Global City</p>
          <p className="text-sm mb-2">Phone: +1 (234) 567-890</p>
          <p className="text-sm mb-4">Email: info@importexport.com</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Import-Export Business. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
