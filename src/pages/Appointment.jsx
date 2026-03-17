import { useLocation } from "react-router-dom";

function Appointment() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const doctor = params.get("doctor") || "";

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Book Appointment</h1>

      <form className="flex flex-col gap-4 max-w-md mx-auto mt-6">
        <input className="border p-2" placeholder="Name" />
        <input className="border p-2" placeholder="Phone" />
        <input
          className="border p-2"
          placeholder="Doctor"
          defaultValue={doctor}
        />
        <input className="border p-2" type="date" />

        <button className="bg-blue-500 text-white p-2">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;