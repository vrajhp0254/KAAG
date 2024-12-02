import React from 'react';

const Services = () => (
  <section
    id="services"
    className="relative p-8 text-white bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content */}
    <div className="relative z-10">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
        <div className="p-4 border rounded-lg text-center">
          <h3 className="font-bold">Supply Chain Consulting</h3>
          <p>Optimize your supply chain for better efficiency.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
