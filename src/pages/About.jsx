import React from "react";

const AboutUs = () => {
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
    <p className="text-xl">
    Bridging Borders, Building Opportunities
    </p>
  </div>
</section>


      {/* Mission and Vision Section */}
      <section className="mission-vision-section py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Mission */}
          <div className="mission bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Mission
            </h2>
            <p className="text-gray-700">
              To be a leading player in the global import-export industry by
              offering exceptional service, superior products, and reliable
              solutions that drive mutual growth and success for our partners
              and clients.
            </p>
          </div>
          {/* Vision */}
          <div className="vision bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Vision
            </h2>
            <p className="text-gray-700">
              To create an integrated global trading platform that connects
              businesses across borders, promotes international trade, and
              contributes to the growth of the global economy.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-center text-blue-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-gray-700 text-lg text-center">
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
      <section className="cta-section bg-blue-900 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-6">
            Partner with KAAG IMPEX Private Limited for reliable and efficient
            import-export solutions.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
