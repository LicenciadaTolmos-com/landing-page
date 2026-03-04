import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
       <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/"element={<Home/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;