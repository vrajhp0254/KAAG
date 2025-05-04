
import Caro from "./components/Caro";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Caro/>
      <AboutUs/>
      <Services/>
      <WhyChooseUs/>

      {/* Call-to-Action Section */}
      <section className="cta py-16 bg-[#7bd91d] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Business Globally?</h2>
        <NavLink to="/contact">
        <button className="bg-white text-[#1a538c] py-2 px-4 rounded hover:bg-gray-200">
          Contact Us Today
        </button>
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
