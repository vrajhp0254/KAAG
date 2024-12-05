import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ onProductAdded }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://kaag-server.vercel.app/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [onProductAdded]);

  const categorizeProducts = (category) => {
    return products.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  const findOtherProducts = () => {
    const categories = [
      { key: "agricultural" },
      { key: "industrial" },
      { key: "electronics" },
      { key: "chemicals" },
      { key: "textiles" },
    ];

    const categorizedKeys = categories.map((c) => c.key.toLowerCase());
    return products.filter(
      (product) =>
        !product.category ||
        !categorizedKeys.some((key) =>
          product.category.toLowerCase().includes(key)
        )
    );
  };

  const categories = [
    { title: "Agricultural Products", key: "agricultural" },
    { title: "Industrial Machinery", key: "industrial" },
    { title: "Consumer Electronics", key: "electronics" },
    { title: "Chemicals and Raw Materials", key: "chemicals" },
    { title: "Textiles and Apparel", key: "textiles" },
  ];

  const otherProducts = findOtherProducts();

  if (loading) {
    return <p className="flex w-screen h-screen justify-center items-center space-x-2 text-xl">
    <span>Loading products...</span>
    <svg
      className="animate-spin h-6 w-6 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        d="M4 12a8 8 0 0 1 8-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </p>
  ;
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[40vh] sm:h-[50vh]"
        style={{ backgroundImage: "url('/product.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-lg sm:text-xl">
            Offering a diverse range of goods across industries with quality and sustainability in focus.
          </p>
        </div>
      </section>

      {/* Categorized Products Section */}
      <div className="container mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl text-[#1a538c] underline font-bold mb-6 text-center">
          Products Categorized by Industry
        </h2>
        {categories.map((category, index) => {
          const categorizedProducts = categorizeProducts(category.key);
          if (categorizedProducts.length === 0) return null;

          return (
            <div key={index} className="mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a538c] underline mb-4">
                {category.title}
              </h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categorizedProducts.map((product, idx) => (
                  <li
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 mx-auto w-full max-w-sm"
                  >
                    <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-gray-100 rounded mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-center text-[#1a538c]">
                      {product.title}
                    </h3>
                    <div className="mb-3 sm:mb-5 text-center">
                      <div className="w-10 sm:w-12 h-1 bg-[#1a538c] mx-auto"></div>
                    </div>
                    <p className="text-sm sm:text-lg text-gray-700 text-center">
                      {product.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Other Products Section */}
        {otherProducts.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1a538c] underline">
              Other Products
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map((product, idx) => (
                <li
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 mx-auto w-full max-w-sm"
                >
                  <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-gray-100 rounded mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-[#1a538c]">
                    {product.title}
                  </h3>
                  <div className="mb-3 sm:mb-5 text-center">
                    <div className="w-10 sm:w-12 h-1 bg-[#1a538c] mx-auto"></div>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-700 text-center">
                    {product.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Commitment Section */}
      <section className="commitment py-8 sm:py-16 bg-white">
        <div className="container mx-auto text-center p-4 sm:p-8 w-full sm:w-[70%] bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg transform transition-transform">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-6 sm:mb-8 text-center text-[#1a538c] underline">
            Our Commitment
          </h2>
          <p className="text-sm sm:text-lg mb-6 sm:mb-8 text-justify">
            At <span className="font-semibold">KAAG IMPEX PVT LTD</span>, we work closely with our partners to ensure every product meets the highest standards of quality, compliance, and sustainability. We adhere to international regulations and prioritize environmental and social responsibility in every transaction.
          </p>
          <div className="flex justify-center mt-4 sm:mt-6">
            <a href="/about">
              <button className="bg-[#7bd91d] hover:bg-[#669e2d] text-white py-2 px-4 sm:py-2 sm:px-6 rounded">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
