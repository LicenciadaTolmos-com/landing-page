const services = [
  {
    title: "Administración de tratamiento endovenoso, intramuscular y subcutáneo",
    description: "Aplicación segura de medicamentos e inyectables a domicilio según indicación médica.",
  },
  {
    title: "Control de funciones vitales",
    description: "Monitoreo de presión arterial, pulso, temperatura, frecuencia respiratoria y oxigenación.",
  },
  {
    title: "Curación de lesiones por presión",
    description: "Cuidado de escaras y lesiones por presión con técnica limpia, seguimiento y prevención de complicaciones.",
  },
  {
    title: "Colocación de sonda nasogástrica",
    description: "Procedimiento profesional para alimentación, drenaje y cuidado seguro del paciente en casa.",
  },
  {
    title: "Curación de heridas y ostomías",
    description: "Limpieza, curación y acompañamiento especializado para heridas quirúrgicas, crónicas y ostomías.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 id="services-title" className="text-3xl font-bold mb-10">Servicios de enfermería</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
