function WhyChoose() {
  const features = [
    {
      title: "Experienced Doctors",
      desc: "Our doctors have 10+ years of experience in their fields.",
    },
    {
      title: "24/7 Support",
      desc: "Our medical team is available anytime for emergencies.",
    },
    {
      title: "Online Consultation",
      desc: "Consult doctors from home through video appointments.",
    },
    {
      title: "Advanced Equipment",
      desc: "We use modern medical technology for better treatment.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Chikitsa
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