import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Doctors from "../components/Doctors";
import WhyChoose from "../components/WhyChoose";

const SHOW_PROFESSIONALS = false;

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      {SHOW_PROFESSIONALS && <Doctors />}
      <WhyChoose/>
    </>
  );
}

export default Home;
