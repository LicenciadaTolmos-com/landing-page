function Contact() {
  return (
    <section className="px-6 py-20 text-center" aria-labelledby="contact-title">
      <h1 id="contact-title" className="text-4xl font-bold text-gray-900">Contacto</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        Solicita información sobre servicios de enfermería a domicilio en Lima, curación de heridas, ostomías, inyectables y control de funciones vitales.
      </p>

      <address className="mt-8 not-italic text-gray-700">
        <p>Email: <a className="text-green-700 hover:underline" href="mailto:AnnaTolmos@gmail.com">AnnaTolmos@gmail.com</a></p>
        <p>Teléfono: <a className="text-green-700 hover:underline" href="tel:+51958085012">958 085 012</a></p>
        <p>Ubicación: Lima, Perú</p>
      </address>
    </section>
  );
}

export default Contact;
