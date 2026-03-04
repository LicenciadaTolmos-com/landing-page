

export default function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Your Health, Our Priority
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Connect with trusted doctors and get expert medical advice anytime, anywhere.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition hover:bg-green-700">
              Ask a Doctor
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              Book Appointment
            </button>
          </div>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54" className="rounded-2xl shadow-xl"/>
        </div>

      </div>
    </section>
  )
}