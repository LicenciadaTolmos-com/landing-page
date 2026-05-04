import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorPage";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import NotFound from "./pages/NotFound";
import Seo from "./seo/Seo";

function App() {
  return (
    <BrowserRouter>
      <Seo />
      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/sobre-mi" replace />} />
          <Route path="/services" element={<Navigate to="/servicios" replace />} />
          <Route path="/contact" element={<Navigate to="/contacto" replace />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
