import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-700 border-t border-green-600 text-white py-10 mt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-3 md:text-left">
        <section aria-labelledby="footer-brand">
          <h2 id="footer-brand" className="text-xl font-semibold">LicenciadaTolmos</h2>
          <p className="mt-2 text-sm opacity-90">
            Enfermería a domicilio en Lima con calidad, cercanía y confianza.
          </p>
        </section>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-lg font-semibold">Servicios</h2>
          <ul className="mt-2 space-y-1 text-sm opacity-90">
            <li><Link className="hover:underline" to="/servicios">Curación de heridas</Link></li>
            <li><Link className="hover:underline" to="/servicios">Ostomías e inyectables</Link></li>
            <li><Link className="hover:underline" to="/servicios">Control de funciones vitales</Link></li>
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="text-lg font-semibold">Contacto en Lima</h2>
          <p className="mt-2 text-sm opacity-90">Lima, Perú</p>
          <p className="text-sm opacity-90">
            <a className="hover:underline" href="tel:+51958085012">958 085 012</a>
          </p>
          <p className="text-sm opacity-90">
            <a className="hover:underline" href="mailto:AnnaTolmos@gmail.com">AnnaTolmos@gmail.com</a>
          </p>
        </address>
      </div>

      <p className="mt-8 text-center text-sm opacity-90">
        &copy; 2026 LicenciadaTolmos. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
