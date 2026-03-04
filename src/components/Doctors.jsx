function Doctors() {

  const doctors = [
    { name: "Dr. Rahul Sharma", specialty: "Cardiologist" },
    { name: "Dr. Priya Reddy", specialty: "Dermatologist" },
    { name: "Dr. Arjun Verma", specialty: "General Physician" },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Doctors</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">

        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{doctor.name}</h3>

            <p className="text-gray-600 mt-2">{doctor.specialty}</p>

            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Book Appointment
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Doctors;