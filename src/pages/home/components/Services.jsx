import React from 'react';

const Services = () => (
  <section
    id="services"
    className="relative p-8 text-white bg-fixed bg-center bg-cover"
    style={{ backgroundImage: "url('/services.webp')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-65"></div>

    {/* Content */}
    <div className="relative z-10">
  <h2 className="text-4xl font-extrabold mb-10 text-center text-white underline">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-20 mt-6">
    <div className="p-4 border rounded-lg text-center">
      <h3 className="font-bold text-2xl mb-2">Shipping</h3>
      <p className='text-lg'>
         We ensure timely deliveries with our robust logistics
        network, offering a seamless experience for transporting goods across
        borders.
      </p>
    </div>
    <div className="p-4 border rounded-lg text-center">
      <h3 className="font-bold text-2xl mb-2">Customs Clearance</h3>
      <p className='text-lg'>
         Our expert team handles all legal compliance,
        regulations, and paperwork, so you can focus on your business.
      </p>
    </div>
    <div className="p-4 border rounded-lg text-center">
      <h3 className="font-bold text-2xl mb-2">Warehousing</h3>
      <p className='text-lg'>
         Our warehouses are equipped with advanced
        inventory management systems to ensure safe and efficient handling of
        your goods.
      </p>
    </div>
    <div className="p-4 border rounded-lg text-center">
      <h3 className="font-bold text-2xl mb-2">Supply Chain Consulting</h3>
      <p className='text-lg'>
        
        Our experts analyze your logistics processes and recommend strategies to
        streamline operations, reduce costs, and improve overall productivity.
      </p>
    </div>
  </div>
</div>


  </section>
);

export default Services;
