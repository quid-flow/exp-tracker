import Hero from "./Hero";
import Features from "./Features";
import Stats from "./Stats";
import CTA from "./CTA";
import Footer from "./Footer";
import Navbar from "../../components/layout/Navbar";


const Landing = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
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