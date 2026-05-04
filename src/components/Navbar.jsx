import { useState } from "react";
import { Link } from "react-router-dom";

const SHOW_PROFESSIONALS = false;
const SHOW_CONSULT_BUTTON = false;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center">
        <Link to="/" className="justify-self-start">
          <h1 className="text-2xl font-bold text-green-600">
            LicenciadaTolmos
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-600 font-medium justify-self-center">
          <li className="hover:text-green-600">
            <Link to="/">Inicio</Link>
          </li>

          {SHOW_PROFESSIONALS && (
            <li className="hover:text-green-600">
              <Link to="/doctors">Profesionales</Link>
            </li>
          )}

          <li className="hover:text-green-600">
            <Link to="/services">Servicios</Link>
          </li>

          <li className="hover:text-green-600">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>

        {SHOW_CONSULT_BUTTON && (
          <Link to="/appointment" className="hidden md:block justify-self-end">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
              Consultar
            </button>
          </Link>
        )}

        <button
          className="md:hidden text-2xl justify-self-end"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>

            {SHOW_PROFESSIONALS && (
              <li>
                <Link to="/doctors" onClick={() => setMenuOpen(false)}>Profesionales</Link>
              </li>
            )}

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </li>

            {SHOW_CONSULT_BUTTON && (
              <li>
                <Link to="/appointment" onClick={() => setMenuOpen(false)}>
                  <button className="bg-green-600 text-white px-5 py-2 rounded-lg w-full">
                    Consultar
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
