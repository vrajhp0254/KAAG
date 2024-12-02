import React, { useState } from "react";

const Products = () => {
  const [products] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  // Function to categorize products
  const categorizeProducts = (category) => {
    return products.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  // Function to find products that don't match any predefined categories
  const findOtherProducts = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="products-hero bg-cover bg-center text-white flex items-center justify-center h-[50vh] bg-gray-700">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Products & Services</h1>
          <p className="text-xl">
            Offering a diverse range of goods across industries with quality and
            sustainability in focus.
          </p>
        </div>
      </section>

      {/* Categorized Products Section */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Products Categorized by Industry
        </h2>
        {categories.map((category, index) => {
          const categorizedProducts = categorizeProducts(category.key);
          if (categorizedProducts.length === 0) return null; // Skip empty categories

          return (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <ul className="grid md:grid-cols-3 gap-6">
                {categorizedProducts.map((product, idx) => (
                  <li key={idx} className="bg-gray-100 p-4 rounded shadow-md">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p>{product.description}</p>
                    <p>
                      <strong>Price:</strong> ${product.price}
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
            <h3 className="text-2xl font-bold mb-4">Other Products</h3>
            <ul className="grid md:grid-cols-3 gap-6">
              {otherProducts.map((product, idx) => (
                <li key={idx} className="bg-gray-100 p-4 rounded shadow-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p>{product.description}</p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Commitment Section */}
      <section className="commitment py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
          <p className="text-lg mb-6">
            At <span className="font-semibold">KAAG IMPEX</span>, we work
            closely with our partners to ensure every product meets the highest
            standards of quality, compliance, and sustainability. We adhere to
            international regulations and prioritize environmental and social
            responsibility in every transaction.
          </p>
          <div className="flex justify-center mt-6">
            <a href="/about">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
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
