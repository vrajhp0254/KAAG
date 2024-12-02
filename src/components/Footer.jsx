import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <img className="h-20 m-5" src={logo}>
          
          </img>
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
            
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">3-81, ff, Tulsi complex,Himmatnagar,Gujarat,India</p>
          <p className="text-sm mb-2">Gopal Trivedi – (+91)9039666969 </p>
          <p className="text-sm mb-2" >Kishan R Patel – (+91)9033497418 </p>
          <p className="text-sm mb-4">Email: info@kaagimpex.com</p>
          
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
