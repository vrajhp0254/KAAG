import React from "react";
import about from "../../../assets/about.png";

import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Only trigger animation once
  });

  return (
    <section id="about" className="p-8 bg-gray-100 py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center  text-[#1a538c] underline ">
        About Us
      </h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Our Mission */}
        <div className="flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <p className="text-2xl font-bold mb-4 text-center text-gray-800">Our Mission</p>
          <p className="text-gray-600 text-lg leading-relaxed">
            To simplify global trade through innovative logistics solutions,
            ensuring customer satisfaction and operational excellence.
          </p>
        </div>

        {/* Our Core Values */}
        <div className="flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our Core Values
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
            <li>Integrity and Trust</li>
            <li>Customer-Centric Approach</li>
            <li>Operational Excellence</li>
            <li>Commitment to Innovation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
