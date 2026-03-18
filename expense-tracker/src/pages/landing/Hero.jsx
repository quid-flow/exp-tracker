import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
      {/* DESKTOP HERO */}
      <section className="relative px-6 min-h-screen flex items-center overflow-hidden group">

        {/* GRID WRAPPER */}
        <div className="absolute inset-0 pointer-events-none">

          {/* GRID */}
          <div className="absolute inset-0">
            <div className="grid-flip w-full h-full opacity-10 
  bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] 
  bg-[size:40px_40px]" />
          </div>

        </div>

        {/* BLUE GLOW */}
        <div className="absolute top-[250px] right-[-120px] w-[500px] h-[220px] bg-blue-600/30 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mt-[-100px] mx-auto grid md:grid-cols-2 gap-16 items-center relative px-6 md:px-10 lg:px-10">

          {/* LEFT CONTENT */}
          <div className="space-y-8 p-8 rounded-2xl ">
            

            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20">
              🚀 Smart Expense Tracking
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Master Your Money.<br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Track Smarter.
              </span>
            </motion.h1>

            <p className="text-slate-400 text-lg max-w-lg">
              Real-time expense tracking with powerful insights and intelligent
              financial clarity — built for modern users.
            </p>

            <div className="flex gap-4">
              <Link
                to="/signup"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 transition"
              >
                Get Started
                <TrendingUp size={18} className="animate-pulse" />
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 border border-slate-700 hover:border-blue-500 hover:text-blue-400 rounded-xl transition"
              >
                Login
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center h-max rounded-2xl p-8">

            <TrendingUp
              size={700}
              className="absolute right-0 top-[-100px] text-yellow-400/20 rotate-12"
            />

            <div className="animate-[floatCard_6s_ease-in-out_infinite]">

              <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-[1.04] transition duration-300 w-[320px]">

                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">Balance</p>
                    <h3 className="text-2xl font-bold text-blue-500">
                      ₹<CountUp end={32400} duration={0.6} />
                    </h3>
                  </div>

                  <p className="text-green-400 text-sm flex items-center gap-1">
                    <TrendingUp size={14} /> +12%
                  </p>
                </div>

                <div className="h-32 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-xl flex items-end p-4">
                  <div className="w-full flex items-end gap-1">
                    <div className="h-6 w-2 bg-blue-400 rounded animate-pulse"></div>
                    <div className="h-10 w-2 bg-blue-400 rounded animate-pulse"></div>
                    <div className="h-12 w-2 bg-blue-400 rounded animate-pulse"></div>
                    <div className="h-16 w-2 bg-blue-500 rounded"></div>
                    <div className="h-20 w-2 bg-blue-500 rounded"></div>
                    <div className="h-24 w-2 bg-blue-500 rounded"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MOBILE HERO (unchanged) */}
      <section className="md:hidden relative px-6 pt-16 pb-12 text-center">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="space-y-8">

          <h1 className="text-3xl font-extrabold leading-tight">
            Master Your Money
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Track Smarter
            </span>
          </h1>

          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Real-time expense tracking with powerful insights.
          </p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Link to="/signup" className="py-3 bg-blue-600 rounded-xl">
              Get Started
            </Link>
            <Link to="/login" className="py-3 border border-slate-700 rounded-xl">
              Login
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;