import React from "react";

const services = [
  {
    title: "Administración de tratamiento endovenoso, intramuscular y subcutáneo",
    description: "Aplicación segura de medicamentos según indicación médica.",
  },
  {
    title: "Control de funciones vitales",
    description: "Monitoreo de presión, pulso, temperatura y oxigenación.",
  },
  {
    title: "Curación de lesiones por presión",
    description: "Tratamiento y cuidado de escaras para una mejor recuperación.",
  },
  {
    title: "Colocación de sonda nasogástrica",
    description: "Procedimiento profesional para alimentación o drenaje.",
  },
  {
    title: "Curación de heridas y ostomías",
    description: "Limpieza, cuidado y seguimiento especializado de heridas y ostomías.",
  },

];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros servicios</h2>

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
