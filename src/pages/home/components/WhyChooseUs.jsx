import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "20+ Years Experience", desc: "Expertise in trade solutions" },
              { title: "Global Network", desc: "Operations in 50+ countries" },
              { title: "Custom Solutions", desc: "Tailored services for businesses" },
              { title: "Compliance Guaranteed", desc: "Adherence to international standards" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs