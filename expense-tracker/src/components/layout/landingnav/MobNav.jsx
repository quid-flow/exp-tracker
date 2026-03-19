import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Coins, HelpCircle, Briefcase, Wrench } from "lucide-react";

const MobNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const playStoreLink = "https://play.google.com";

  return (
    <div className="md:hidden">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-5 h-[70px] backdrop-blur bg-transparent border-none">
        
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Quid<span className="text-blue-500">Flow</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl transition duration-300"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* OVERLAY MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-slate-950/100 backdrop-blur-xl z-40 transform transition-all duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}>

        {/* HEADER */}
        <div className="flex justify-between items-center px-5 h-[70px] border-none">
          <Link to="/" className="text-xl font-bold tracking-wide">
          Quid<span className="text-blue-500">Flow</span>
        </Link>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="px-6 py-6 space-y-6 text-base">

          {/* FEATURES DROPDOWN */}
          <div>
            <div
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="flex justify-between items-center cursor-pointer text-white"
            >
              <span>Products</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  featuresOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                featuresOpen ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <div className="pl-3 space-y-3 text-slate-400">

                <Link to="/daily" onClick={() => setMenuOpen(false)} className="block">
                  Daily Saving
                </Link>

                <Link to="/weekly" onClick={() => setMenuOpen(false)} className="block">
                  Weekly Saving
                </Link>

                <Link to="/monthly" onClick={() => setMenuOpen(false)} className="block">
                  Monthly Saving
                </Link>

              </div>
            </div>
          </div>

          {/* LINKS */}

          <Link
            to="/gold-rate"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <Coins size={18} className="text-yellow-400" />
            Gold Rate
          </Link>

          <Link
            to="/faqs"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <HelpCircle size={18} />
            FAQs
          </Link>

          <Link
            to="/career"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <Briefcase size={18} />
            Career
          </Link>

          <Link
            to="/devtools"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <Wrench size={18} />
            DevTools
          </Link>

          {/* CTA */}
          <button
            onClick={() => window.open(playStoreLink)}
            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 transition"
          >
            Download App
          </button>

        </div>
      </div>
    </div>
  );
};

export default MobNav;