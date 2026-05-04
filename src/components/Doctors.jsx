import { Link } from "react-router-dom";
import { useState } from "react";

function Doctors() {
  const [search, setSearch] = useState("");

  const doctors = [
    {
      name: "Dr. Rahul Sharma",
      specialty: "Cardiólogo",
      experience: "Más de 10 años de experiencia",
      rating: "4.8",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Dermatóloga",
      experience: "Más de 8 años de experiencia",
      rating: "4.7",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dr. Arjun Reddy",
      specialty: "Médico general",
      experience: "Más de 12 años de experiencia",
      rating: "4.9",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros profesionales
        </h2>

        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Buscar profesional o especialidad..."
            className="w-full border p-3 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredDoctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition"
            >
              <img
                src={doc.image}
                alt={`Foto de ${doc.name}`}
                loading="lazy"
                decoding="async"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold">
                {doc.name}
              </h3>

              <p className="text-gray-500">
                {doc.specialty}
              </p>

              <p className="text-sm text-gray-400">
                {doc.experience}
              </p>

              <p className="text-yellow-500 mb-4">
                &#9733; {doc.rating}
              </p>

              <Link to={`/appointment?doctor=${encodeURIComponent(doc.name)}`}>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                  Reservar cita
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
