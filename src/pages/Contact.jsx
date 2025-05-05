import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    productType: "",
    productDetail: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const [status, setStatus] = useState({
    message: "",
    type: "", // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Phone number validation
    if (name === "phoneNumber") {
      const phoneRegex = /^(\+91|91)?[6-9][0-9]{9}$/
;
      if (value === "" || phoneRegex.test(value)) {
        setPhoneError("");
      } else {
        setPhoneError("Please enter a valid phone number (e.g. +919876543210)");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://kaag-server.vercel.app/api/products/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: "Thank you for your inquiry. We'll get back to you soon!",
          type: "success",
        });
        // Clear form
        setFormData({
          companyName: "",
          fullName: "",
          email: "",
          phoneNumber: "",
          productType: "",
          productDetail: "",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[50vh]"
        style={{ backgroundImage: "url('/contact.webp')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            For inquiries, partnerships, or more information about our services,
            please reach out to us:
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-16 bg-gray-100 flex flex-wrap max-w-7xl mx-auto">
        {/* Form */}
        <div className="w-full sm:w-1/2 flex flex-col gap-10 mx-auto">
          <div className="bg-white shadow-lg p-6 rounded">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1a538c] underline">
              Global Reach
            </h2>

            <div className="text-justify text-lg">
              KAAG IMPEX Private Limited operates in key markets across North
              America, Europe, Asia, and Africa. Our extensive network of
              partners and agents enables us to navigate complex trade
              environments and deliver products to any corner of the globe.
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded text-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1a538c] underline">
              Contact Information
            </h2>

            <div className="space-y-4">
              <p>
                <strong>Address:</strong> At - 3-81, FF, Tulsi Complex, Kankrol,
                Himatnagar, Sabarkantha-383001, Gujarat
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
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-1/2 mx-auto shadow-md p-6 rounded">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1a538c] underline">
            Get in Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Enter your company name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full border rounded p-2 ${
                  phoneError ? "border-red-500" : ""
                }`}
                placeholder="e.g. +919876543210"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="productType"
              >
                Product type
              </label>
              <input
                type="text"
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Enter product type"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="productDetail"
              >
                Product detail
              </label>
              <textarea
                id="productDetail"
                name="productDetail"
                value={formData.productDetail}
                onChange={handleChange}
                className="w-full border rounded p-2"
                rows="5"
                placeholder="Write product details here"
                required
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`p-3 rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
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
