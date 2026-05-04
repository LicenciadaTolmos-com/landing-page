

const SHOW_HERO_ACTIONS = false;

export default function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Tu salud, es mi prioridad
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Licenciada en enfermería con amplia experiencia en hospitalización y cuidados especializados, enfocada en la atención segura y personalizada del paciente. Especialista en manejo avanzado de heridas y ostomías, con formación continua en bioseguridad, control de infecciones y procedimientos clínicos, brindando servicios profesionales a domicilio con responsabilidad y calidad.
          </p>

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
          <img
            src="/home3.png"
            alt="LicenciadaTolmos con uniforme de enfermera"
            className="h-[560px] w-full max-w-[520px] rounded-2xl object-cover object-top shadow-xl md:h-[680px]"
          />
        </div>

      </div>
    </section>
  )
}
