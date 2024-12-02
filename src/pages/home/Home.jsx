import React from "react";
import { FaPlane, FaShip, FaTruck, FaGlobe } from "react-icons/fa";
import Caro from "./components/Caro";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Caro/>
      <AboutUs/>
      <Services/>
      <WhyChooseUs/>

      {/* Call-to-Action Section */}
      <section className="cta py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Business Globally?</h2>
        <a href="/contact">
        <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
          Contact Us Today
        </button>
        </a>
      </section>
    </div>
  );
};

export default Home;
