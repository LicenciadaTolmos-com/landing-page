import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[60vh] px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Pagina no encontrada</h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        La pagina que buscas no existe o cambio de direccion. Vuelve al inicio para encontrar los servicios de enfermeria a domicilio en Lima.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
      >
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
