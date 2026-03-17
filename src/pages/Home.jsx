import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Doctors from "../components/Doctors";
import WhyChoose from "../components/WhyChoose";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Doctors />
      <WhyChoose/>
    </>
  );
}

export default Home;