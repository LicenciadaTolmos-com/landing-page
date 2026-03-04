import React from "react";

const services = [
  {
    title: "Online Consultation",
    description: "Talk to doctors from your home anytime.",
  },
  {
    title: "Health Checkups",
    description: "Regular medical checkups for better health.",
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency support from professionals.",
  },
  {
    title: "Specialist Doctors",
    description: "Consult experienced specialist doctors.",
  },
  {
    title: "Lab Tests",
    description: "Book medical lab tests easily online.",
  },
  {
    title: "Medicine Delivery",
    description: "Get medicines delivered to your home.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition "
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;