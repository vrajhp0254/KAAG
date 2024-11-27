import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero bg-cover bg-center text-white flex items-center justify-center h-[40vh] bg-gray-700">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            Reach out to us for inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-16 bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white shadow-md p-6 rounded">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded p-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border rounded p-2"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow-md p-6 rounded">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4">
              Reach out to us via phone, email, or visit our office. We’d love
              to hear from you!
            </p>
            <div className="space-y-4">
              <p>
                <strong>Address:</strong> 123 Trade Street, Global City
              </p>
              <p>
                <strong>Phone:</strong> +1 (234) 567-890
              </p>
              <p>
                <strong>Email:</strong> info@importexport.com
              </p>
              <p>
                <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="relative overflow-hidden rounded shadow-lg" style={{ height: "400px" }}>
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d-122.41941558468106!3d37.77492927975942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a74a3c317%3A0xa2e3c40e4fb7ed85!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1617638884201!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-16 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">We’re Here to Help</h2>
        <p className="mb-6">
          Have questions or need assistance? Our team is just a message away.
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default Contact;
