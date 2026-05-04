import About from "../components/About";

function AboutPage() {
  return (
    <>
      <section className="bg-green-50 px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Licenciada en enfermería en Lima</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Experiencia hospitalaria, cuidado de heridas, ostomías y atención profesional a domicilio.
        </p>
      </section>
      <About />
    </>
  );
}

export default AboutPage;
