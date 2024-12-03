import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-[#1a538c] underline ">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 gap-x-32 m-10 gap-y-20">
          {[
            {
              title: "Global Network",
              desc: "Our extensive network of trusted suppliers and distributors ensures access to premium quality products at competitive rates.",
            },
            {
              title: "On-Time Delivery",
              desc: "We pride ourselves on our ability to deliver goods promptly and efficiently, regardless of the destination.",
            },
            {
              title: "Tailored Solutions",
              desc: "We understand the unique requirements of our clients and offer customized services to ensure seamless trading experiences.",
            },
            {
              title: "Sustainability and Compliance",
              desc: "We place a high emphasis on environmentally friendly practices and adhere to global compliance standards.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-md p-6 rounded">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
