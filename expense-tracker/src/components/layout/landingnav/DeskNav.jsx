import { Link } from "react-router-dom";
import { CalendarDays, CalendarClock, Calendar, ChevronDown } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";  
import { Coins , ChartCandlestick , HeartHandshake} from "lucide-react";
const DeskNav = () => {

  const playStoreLink = "https://play.google.com";

  return (

    <div className="hidden md:flex max-w-7xl mx-auto px-6 h-[72px] items-center justify-between">

      {/* Logo */}

      <Link to="/" className="text-3xl font-bold">
        Quid<span className="text-blue-500">Flow</span>
      </Link>


      {/* MENU */}

      <div className="flex items-center gap-12 text-sm relative bg-transparent px-2 py-2 rounded-xl">

        {/* FEATURES */}

        {/* Products */}
        <div className="group relative ">
          <span className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
            Products<ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180 m-auto" />
          </span>
          <div className="absolute left-0 top-full mt-2 pb-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

            <div className="bg-slate-900  rounded-2xl shadow-2xl p-3 w-[220px] space-y-1">

              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-slate-800 hover:translate-x-1 transition-all duration-200">
                <CalendarDays size={20} className="text-blue-500" />
                <p className="text-sm text-slate-300">Daily Saving</p>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-slate-800 hover:translate-x-1 transition-all duration-200">
                <CalendarClock size={20} className="text-blue-500" />
                <p className="text-sm text-slate-300">Weekly Saving</p>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-slate-800 hover:translate-x-1 transition-all duration-200">
                <Calendar size={20} className="text-blue-500" />
                <p className="text-sm text-slate-300">Monthly Saving</p>
              </div>
            </div>
          </div>
        </div> 

        <Link className="flex items-center gap-1 hover:text-blue-400 transition duration-200">
          <Coins
            size={18}
            className="text-yellow-400 "
            style={{ animationDuration: "4s" }}
          />
          <span>Gold Rate</span>
        </Link>

        <Link className="flex items-center gap-1 hover:text-blue-400 transition duration-200">
          {/* <ChartCandlestick
            size={18}
            className="text-yellow-400"
            style={{ animationDuration: "4s" }}
          /> */}
          <span>SIP</span>
        </Link>

        <Link className="flex items-center gap-1 hover:text-blue-400 transition duration-200">
          {/* <HeartHandshake
            size={18}
            className="text-yellow-400"
            style={{ animationDuration: "4s" }}
          /> */}
          <span>Support</span>
        </Link>

        <Link className="hover:text-blue-400">Career</Link>
      </div>

      <div className="flex items-center gap-14 text-sm relative">
        {/* DOWNLOAD */}

        <button
          onClick={() => window.open('https://play.google.com/store/search?q=shimnit+hsrp&c=apps')}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white text-sm hover:scale-105 hover:shadow-lg transition"
        >
          <FaGooglePlay size={16} />
          <FaApple size={16} />
          Download App
        </button>

      </div>

    </div>

  );
};

export default DeskNav;