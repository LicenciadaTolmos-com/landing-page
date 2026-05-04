import { useLocation } from "react-router-dom";

function Appointment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const doctor = params.get("doctor") || "";

  return (
    <section className="px-6 py-20 text-center" aria-labelledby="appointment-title">
      <h1 id="appointment-title" className="text-3xl font-bold">Reservar cita</h1>

      <form className="flex flex-col gap-4 max-w-md mx-auto mt-6" aria-label="Formulario para reservar cita">
        <label className="sr-only" htmlFor="name">Nombre</label>
        <input id="name" name="name" className="border p-2" autoComplete="name" placeholder="Nombre" />

        <label className="sr-only" htmlFor="phone">Teléfono</label>
        <input id="phone" name="phone" className="border p-2" type="tel" autoComplete="tel" placeholder="Teléfono" />

        <label className="sr-only" htmlFor="professional">Profesional</label>
        <input
          id="professional"
          name="professional"
          className="border p-2"
          placeholder="Profesional"
          defaultValue={doctor}
        />

        <label className="sr-only" htmlFor="date">Fecha</label>
        <input id="date" name="date" className="border p-2" type="date" />

        <button className="bg-blue-500 text-white p-2">
          Reservar cita
        </button>
      </form>
    </section>
  );
}

export default Appointment;
