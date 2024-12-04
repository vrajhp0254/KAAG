import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[50vh]"
        style={{ backgroundImage: "url('/contact.webp" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            Reach out to us for inquiries, partnerships, or support.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-16 bg-gray-100">
          {/* Form */}
          <div className="bg-[#7bd91d] w-[40%] mx-auto shadow-md p-6 rounded">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Company Name
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
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="name"
                >
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
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
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
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Phone Number
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
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Product type
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
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Product detail
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
          <div className="bg-white shadow-lg p-6 rounded">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
            
            <div className="space-y-4 flex gap-10 items-center justify-between">
              <p>
                <strong>Address:</strong> At - 3-81, FF, Tulsi Complex, Kankrol, Himatnagar, Sabarkantha-383001, Gujarat
              </p>
              <p>
                <strong>Phone:</strong> <br />
                Gopal Trivedi – (+91)9039666969 <br />
                Kishan R Patel – (+91)9033497418
              </p>

              <p>
                <strong>Email:</strong> info@kaagimpex.com
              </p>
            </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="map py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1a538c] underline">
            Our Location
          </h2>
          <div
            className="relative overflow-hidden rounded shadow-lg"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.667635567557!2d72.97064257533067!3d23.580377578786884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM0JzQ5LjQiTiA3MsKwNTgnMjMuNiJF!5e0!3m2!1sen!2sin!4v1733154279024!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
