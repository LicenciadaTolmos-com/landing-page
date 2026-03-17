import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-green-600">
            Chikitsa
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">

          <li className="hover:text-green-600">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-green-600">
            <Link to="/doctors">Doctors</Link>
          </li>

          <li className="hover:text-green-600">
            <Link to="/services">Services</Link>
          </li>

          <li className="hover:text-green-600">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Ask Doctor Button (Desktop) */}
        <Link to="/appointment" className="hidden md:block">
         <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
  Ask Doctor
</button>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">

          <ul className="flex flex-col gap-4 text-gray-600 font-medium">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            <li>
              <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>

            <li>
              <Link to="/appointment" onClick={() => setMenuOpen(false)}>
                <button className="bg-green-600 text-white px-5 py-2 rounded-lg w-full">
                  Ask Doctor
                </button>
              </Link>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}