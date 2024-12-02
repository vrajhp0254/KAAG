import React from 'react';
import about from '../../../assets/about.png';
const AboutUs = () => (
  <section id="about" className="p-8 bg-gray-100">
    <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
    <div className="max-w-6xl mx-auto text-center flex  justify-between w-screen gap-6">
  {/* Text Section */}
  <div className="w-1/2 text-left">
    
    <p className="text-lg text-gray-700">
    Established with a vision to become a trusted global partner in the import and export industry, KAAG IMPEX Private Limited is a dynamic and forward-thinking company specializing in the international trade of a diverse range of goods. We are dedicated to bridging the gap between manufacturers and consumers across borders by delivering high-quality products and services with unmatched reliability and efficiency.
    </p>
  </div>

  {/* Image Section */}
  <div className="w-1/2 h-80 relative">
    <img
      src={about}
      alt="About Us"
      className="absolute  h-full w-full object-fit"
    />
  </div>
</div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      
      
  {/* Our Mission */}
  <div className="flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4H9m4 4h1m0 0h-1m0 0h1m3-10a4 4 0 10-8 0 4 4 0 008 0zM8 9v3a1 1 0 001 1h6a1 1 0 001-1V9m-4 11v2a1 1 0 001 1h4a1 1 0 001-1v-2"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
    <p className="text-gray-600 text-lg leading-relaxed">
      To simplify global trade through innovative logistics solutions, ensuring customer satisfaction and operational excellence.
    </p>
  </div>

  {/* Our Core Values */}
  <div className="flex flex-col items-start bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2l4 -4M7 9l-2 2l4 4l-4 4m16 -2h-2m0 0h2m0 0v-2m0 2v2"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Core Values</h3>
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

export default AboutUs;
