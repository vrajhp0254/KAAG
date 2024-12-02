import React from 'react';

const AboutUs = () => (
  <section id="about" className="p-8 bg-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg text-gray-700">
        At ImportExport Co., we are dedicated to bridging businesses across the globe with seamless trade solutions. With a rich history of excellence and innovation, we ensure reliable and efficient services for all your import-export needs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Company Vision */}
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-gray-600">
          To become a globally recognized leader in the import-export industry, fostering trade relationships that drive sustainable growth.
        </p>
      </div>

      {/* Company Mission */}
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To simplify global trade through innovative logistics solutions, ensuring customer satisfaction and operational excellence.
        </p>
      </div>

      {/* Core Values */}
      <div className="p-6 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-600">
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
