import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import Stats from "./Stats.jsx";
import CTA from "./CTA.jsx";
import Footer from "./Footer.jsx";
import Navbar from "../../components/layout/landingnav/LandingNavbar.jsx";

const Landing = () => {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <Hero />

      <div className="bg-slate-900">
        <Features />
      </div>

      <div className="bg-slate-950">
        <Stats />
      </div>

      <div className="bg-slate-900">
        <CTA />
      </div>

      <Footer />
    </div>
  );
};

export default Landing;