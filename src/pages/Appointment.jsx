import { useLocation } from "react-router-dom";

function Appointment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const doctor = params.get("doctor") || "";

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Reservar cita</h1>

      <form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
        <input className="border p-2" placeholder="Nombre" />
        <input className="border p-2" placeholder="Teléfono" />
        <input
          className="border p-2"
          placeholder="Profesional"
          defaultValue={doctor}
        />
        <input className="border p-2" type="date" />

        <button className="bg-blue-500 text-white p-2">
          Reservar cita
        </button>
      </form>
    </div>
  );
}

export default Appointment;
