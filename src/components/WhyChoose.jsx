function WhyChoose() {
  const features = [
    {
      title: "Atención profesional certificada",
      desc: "Licenciada en enfermería con experiencia hospitalaria y especialización en cuidados avanzados",
    },
    {
      title: "Seguridad y confianza",
      desc: "Cumplimos protocolos estrictos de bioseguridad en cada procedimiento.",
    },
    {
      title: "Atención a domicilio",
      desc: "Recibes cuidado profesional sin salir de casa, con comodidad y puntualidad.",
    },
    {
      title: "Enfoque humano y personalizado",
      desc: "Tratamos a cada paciente con empatía, seguimiento y dedicación continua.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Por qué elegir LicenciadaTolmos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >

              <h3 className="text-xl font-semibold mb-3 text-green-600">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
