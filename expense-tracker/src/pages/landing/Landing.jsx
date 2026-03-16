import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import Stats from "./Stats.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";
import Navbar from "../../components/layout/landingnav/LandingNavbar.jsx";

const Landing = () => {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;