import React from "react";
import { FaPlane, FaShip, FaTruck, FaGlobe } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-cover bg-center text-white flex flex-col items-center justify-center h-screen">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            Your Trusted Partner in Global Trade
          </h1>
          <p className="text-xl mb-6">
            Seamless Import-Export Solutions to Connect Businesses Worldwide.
          </p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-4">
              Get a Free Quote
            </button>
            <button className="bg-transparent border border-white py-2 px-4 rounded text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "20+ Years Experience", desc: "Expertise in trade solutions" },
              { title: "Global Network", desc: "Operations in 50+ countries" },
              { title: "Custom Solutions", desc: "Tailored services for businesses" },
              { title: "Compliance Guaranteed", desc: "Adherence to international standards" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaPlane />, title: "Import Solutions", desc: "Seamless procurement and logistics." },
              { icon: <FaShip />, title: "Export Solutions", desc: "Expand your reach to global markets." },
              { icon: <FaTruck />, title: "Customs Clearance", desc: "Hassle-free documentation and compliance." },
              { icon: <FaGlobe />, title: "Freight Forwarding", desc: "Air, sea, and road transport services." },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-100 shadow-md p-6 rounded flex flex-col items-center">
                <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", feedback: "Excellent service and timely delivery!" },
              { name: "Jane Smith", feedback: "Reliable partner for global trade." },
              { name: "Michael Lee", feedback: "Great experience working with them." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded">
                <p className="italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Expand Your Business Globally?</h2>
        <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default Home;
