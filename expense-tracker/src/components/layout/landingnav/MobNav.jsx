import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MobNav = () => {

  const [menuOpen,setMenuOpen] = useState(false);
  const [featuresOpen,setFeaturesOpen] = useState(false);

  const playStoreLink = "https://play.google.com";

  return (

    <div className="md:hidden">

      {/* TOP BAR */}

      <div className="flex justify-between items-center px-6 h-[72px]">

        <Link to="/" className="text-2xl font-bold">
          Quid<span className="text-blue-500">Flow</span>
        </Link>

        <button
          onClick={()=>setMenuOpen(!menuOpen)}
          className="text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* MENU */}

      {menuOpen && (

        <div className="bg-slate-950 border-t border-slate-800 px-6 py-6 space-y-6 text-sm">

          {/* FEATURES */}

          <div>

            <div
              onClick={()=>setFeaturesOpen(!featuresOpen)}
              className="flex justify-between cursor-pointer"
            >
              Features
              <ChevronDown size={16}/>
            </div>

            {featuresOpen && (

              <div className="mt-3 space-y-2 text-slate-400 pl-3">

                <p>Daily Saving</p>
                <p>Weekly Saving</p>
                <p>Monthly Saving</p>

              </div>

            )}

          </div>

          <Link>Gold Rate</Link>

          <Link>FAQs</Link>

          <Link>Career</Link>

          <button
            onClick={()=>window.open(playStoreLink)}
            className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl"
          >
            Download App
          </button>

        </div>

      )}

    </div>

  );
};

export default MobNav;