import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero bg-cover bg-center text-white flex items-center justify-center h-[50vh] bg-gray-700">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Empowering global trade with seamless import-export solutions.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p>
                To simplify international trade, foster global connections, and
                provide businesses with reliable, efficient, and sustainable
                import-export services.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p>
                To become a leading global trade partner by enabling seamless
                business exchanges and supporting sustainable development
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="expertise py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Global Logistics", desc: "Efficient transportation across continents." },
              { title: "Customs Clearance", desc: "Hassle-free documentation and compliance." },
              { title: "Freight Management", desc: "Tailored air, sea, and road freight solutions." },
              { title: "Market Expansion", desc: "Helping businesses reach new global markets." },
            ].map((expertise, idx) => (
              <div key={idx} className="bg-gray-100 shadow-md p-6 rounded">
                <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
                <p>{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="team py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO", img: "https://via.placeholder.com/150" },
              { name: "Jane Smith", role: "COO", img: "https://via.placeholder.com/150" },
              { name: "Michael Lee", role: "Head of Logistics", img: "https://via.placeholder.com/150" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded flex flex-col items-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Looking for Reliable Trade Solutions?</h2>
        <p className="mb-6">
          Get in touch with us today and let’s grow your business globally.
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
