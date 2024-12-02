import React from 'react';

const Products = () => (
  <section id="products" className="p-8 bg-gray-100">
    <h2 className="text-3xl font-bold text-center">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Electronics</h3>
        <p>High-quality gadgets and equipment.</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Textiles</h3>
        <p>Fine fabrics and materials from top manufacturers.</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Machinery</h3>
        <p>Advanced machinery for industrial use.</p>
      </div>
    </div>
  </section>
);

export default Products;
