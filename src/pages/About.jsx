import React from "react";
import about from "../assets/about.png";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {

  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section
        className=" relative bg-cover bg-center text-white flex items-center justify-center h-[50vh]"
        style={{ backgroundImage: "url('/about.webp')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Bridging Borders, Building Opportunities</p>
        </div>
      </section>

      <section id="about" className="p-8 bg-gray-100 py-16">
      
      <div
        ref={ref}
        className="w-[85vw] mx-auto text-center flex justify-evenly gap-6"
      >
        {/* Image Section with Animation */}
        <div className="w-1/2 h-[60vh] relative">
          <img
            src={about}
            alt="About Us"
            className={`absolute rounded-xl h-full w-[90%] object-cover transform transition-transform duration-700 ease-in-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            }`}
          />
        </div>
        {/* Text Section */}
        <div className="w-1/2 text-justify p-2 my-auto">
          <p className="text-2xl text-gray-700">
            Established with a vision to become a trusted global partner in the
            import and export industry, KAAG IMPEX Private Limited is a dynamic
            and forward-thinking company specializing in the international trade
            of a diverse range of goods. We are dedicated to bridging the gap
            between manufacturers and consumers across borders by delivering
            high-quality products and services with unmatched reliability and
            efficiency.
          </p>
        </div>
      </div>

      <div className="flex gap-10 mt-8 justify-evenly">
        {/* Our Mission */}
        <div className="w-1/2  flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <p className="text-2xl font-extrabold mb-6 text-center w-full  text-[#1a538c] underline ">
            Our Mission
          </p>
          <p className="text-gray-600 text-lg leading-relaxed justify-center">
            To be a leading player in the global import-export industry by
            offering exceptional service, superior products, and reliable
            solutions that drive mutual growth and success for our partners and
            clients.
          </p>
        </div>

        {/* Our Core Values */}
        <div className=" w-1/2 flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-2xl font-extrabold mb-6 text-center w-full text-[#1a538c] underline ">
            Our Vision
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed justify-center">
            To create an integrated global trading platform that connects businesses across borders, promotes international trade, and
            contributes to the growth of the global economy.
          </p>
        </div>
      </div>
    </section>

      

      {/* Expertise Section */}
      <section className="expertise-section py-10 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              With a strong network of global suppliers and distributors, KAAG
              IMPEX Private Limited excels in facilitating the import and export
              of various goods across multiple sectors. Our expertise spans a
              broad spectrum, allowing us to offer customized solutions to meet
              the unique needs of businesses, ensuring smooth and timely
              operations at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section bg-[#7bd91d] text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-6">
            Partner with KAAG IMPEX Private Limited for reliable and efficient
            import-export solutions.
          </p>
          <button className=" text-[#1a538c] bg-white py-3 px-6 rounded-md">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
