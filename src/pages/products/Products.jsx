import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = ({ onProductAdded }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the server using Axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products"); // Make sure this matches your server's URL
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [onProductAdded]); // Re-fetch products when a new product is added

  // Function to categorize products
  const categorizeProducts = (category) => {
    return products.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  // Function to find uncategorized products
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
    return <p>
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[50vh]"
        style={{ backgroundImage: "url('/product.webp')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-xl">
            Offering a diverse range of goods across industries with quality and
            sustainability in focus.
          </p>
        </div>
      </section>Loading products...</p>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center h-[50vh]"
        style={{ backgroundImage: "url('/product.webp')" }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-xl">
            Offering a diverse range of goods across industries with quality and
            sustainability in focus.
          </p>
        </div>
      </section>

      {/* Categorized Products Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl text-[#1a538c] underline font-bold mb-6 text-center">
          Products Categorized by Industry
        </h2>
        {categories.map((category, index) => {
          const categorizedProducts = categorizeProducts(category.key);
          if (categorizedProducts.length === 0) return null;

          return (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a538c] underline mb-4">
                {category.title}
              </h3>
              <ul className="grid md:grid-cols-4 gap-6">
                {categorizedProducts.map((product, idx) => (
                  <li
                    key={idx}
                    className="bg-white w-80 p-4 rounded-lg shadow-lg border border-gray-300 mx-auto"
                  >
                    {/* Image */}
                    <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-center text-[#1a538c]">
                      {product.title}
                    </h3>
                    {/* Decorative Line */}
                    <div className="mb-5 text-center">
                      <div className="w-12 h-1 bg-[#1a538c] mx-auto"></div>
                    </div>
                    {/* Description */}
                    <p className="text-gray-700 text-lg text-center">
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
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-[#1a538c] underline">
              Other Products
            </h3>
            <ul className="grid md:grid-cols-4 gap-6">
              {otherProducts.map((product, idx) => (
                <li
                  key={idx}
                  className="bg-white w-80 p-4 rounded-lg shadow-lg border border-gray-300 mx-auto"
                >
                  {/* Image */}
                  <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded mb-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center text-[#1a538c]">
                    {product.title}
                  </h3>
                  {/* Decorative Line */}
                  <div className="mb-5 text-center">
                    <div className="w-12 h-1 bg-[#1a538c] mx-auto"></div>
                  </div>
                  {/* Description */}
                  <p className="text-gray-700 text-lg text-center">
                    {product.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Commitment Section */}
      <section className="commitment py-16 bg-white">
        <div className="container mx-auto text-center w-[60%] flex flex-col bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
          <h2 className="text-2xl font-extrabold mb-8 text-center text-[#1a538c] underline">
            Our Commitment
          </h2>
          <p className="text-lg mb-6 text-justify">
            At <span className="font-semibold">KAAG IMPEX</span>, we work
            closely with our partners to ensure every product meets the highest
            standards of quality, compliance, and sustainability. We adhere to
            international regulations and prioritize environmental and social
            responsibility in every transaction.
          </p>
          <div className="flex justify-center mt-6">
            <a href="/about">
              <button className="bg-[#7bd91d] hover:bg-[#669e2d] text-white py-2 px-6 rounded">
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
