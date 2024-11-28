import React, { useState } from "react";

const Products = () => {
  const [products] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
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

      {/* Products Section */}

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Products</h2>
        <ul className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
            </li>
          ))}
        </ul>
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
