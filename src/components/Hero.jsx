const SHOW_HERO_ACTIONS = false;

export default function Hero() {
  return (
    <section className="bg-green-50" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Enfermería a domicilio en Lima
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Licenciada en enfermería con experiencia hospitalaria, especializada en curación de heridas, ostomías, inyectables, tratamiento endovenoso y control de funciones vitales. Atención segura, humana y personalizada para pacientes en casa.
          </p>

          <a
            href="https://wa.me/51958085012?text=Hola%2C%20quiero%20informacion%20sobre%20enfermeria%20a%20domicilio%20en%20Lima."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-green-600 px-6 py-3 font-medium text-white shadow transition hover:bg-green-700 hover:shadow-lg"
            aria-label="Escribeme al WhatsApp"
          >
            Escríbeme al WhatsApp
          </a>

          {SHOW_HERO_ACTIONS && (
            <div className="mt-6 flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition hover:bg-green-700">
                Consultar ahora
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                Reservar cita
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center md:justify-end">
          <picture>
            <source srcSet="/home3.webp" type="image/webp" />
            <img
              src="/home3.png"
              alt="Licenciada en enfermería a domicilio en Lima con uniforme clínico"
              width="520"
              height="680"
              fetchPriority="high"
              decoding="async"
              className="h-[560px] w-full max-w-[520px] rounded-2xl object-cover object-top shadow-xl md:h-[680px]"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
