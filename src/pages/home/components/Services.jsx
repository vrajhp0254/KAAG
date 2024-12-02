import React from 'react';

const Services = () => (
  <section id="services" className="p-8">
    <h2 className="text-3xl font-bold text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Shipping</h3>
        <p>Efficient and reliable global shipping solutions.</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Customs Clearance</h3>
        <p>Hassle-free customs documentation and processing.</p>
      </div>
      <div className="p-4 border rounded-lg text-center">
        <h3 className="font-bold">Warehousing</h3>
        <p>Secure and modern storage facilities worldwide.</p>
      </div>
    </div>
  </section>
);

export default Services;
