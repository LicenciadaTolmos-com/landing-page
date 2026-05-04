import Faq from "../components/Faq";
import Services from "../components/Services";

function ServicesPage() {
  return (
    <>
      <section className="bg-green-50 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Servicios de enfermería a domicilio en Lima</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Atención profesional para curación de heridas, ostomías, inyectables, tratamiento endovenoso, control de funciones vitales y procedimientos de enfermería en casa.
        </p>
      </section>
      <Services />
      <Faq />
    </>
  );
}

export default ServicesPage;
