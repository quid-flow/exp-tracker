import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";


const Hero = () => {
  return (
    <>
      {/* ================= DESKTOP HERO ================= */}
      <section className="hidden md:flex relative px-6 min-h-screen items-center overflow-hidden group">

        {/* GRID WRAPPER */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0">
            <div className="grid-flip w-full h-full opacity-10 
              bg-[linear-gradient(#1e293b_1px,transparent_1px),linear-gradient(90deg,#1e293b_1px,transparent_1px)] 
              bg-[size:40px_40px]" />
          </div>
        </div>

        {/* BLUE GLOW */}
        <div className="absolute top-[250px] right-[-120px] w-[500px] h-[220px] bg-blue-600/30 blur-[160px] rounded-full pointer-events-none"></div>

        {/* SAME AS YOUR CODE */}
        <div className="max-w-7xl mt-[-100px] mx-auto grid md:grid-cols-2 gap-16 items-center relative px-6 md:px-10 lg:px-10">

          {/* LEFT */}
          <div className="space-y-8 p-8 rounded-2xl">

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

          {/* RIGHT */}
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



      {/* ================= MOBILE HERO ================= */}
      <section className="md:hidden relative max-h-screen px-6 pt-10 pb-16 text-center overflow-hidden">

        {/* ANIMATED GLOW BACKGROUND */}
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[180px] h-[160px] bg-blue-600/70 blur-[120px] rounded-full animate-pulse"></div>

        <div className="relative space-y-6">

          {/* BADGE */}
          {/* <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
      🚀 Smart Expense Tracking
    </div> */}

          {/* HEADING */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Master Your Money
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Track Smarter
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
            Real-time tracking with powerful insights and intelligent clarity.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">

            <Link
              to="/signup"
              className="relative py-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30 active:scale-95 transition overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>

              {/* SHINE EFFECT */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shine_2.5s_infinite]" />
            </Link>

            <Link
              to="/login"
              className="py-3 border border-slate-700 hover:border-blue-500 hover:text-blue-400 rounded-xl transition active:scale-95"
            >
              Login
            </Link>

          </div>

          {/* FLOATING CARD */}
          <div className="mt-20 flex justify-center pt-10">

            <div className="relative">

              {/* BACK GLOW */}
              <div className="absolute inset-0 bg-blue-500/40 blur-2xl rounded-2xl"></div>

              {/* CARD */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-[260px] animate-[floatCard_5s_ease-in-out_infinite]">

                {/* TOP */}
                <div className="flex justify-between mb-4">

                  <div>
                    <p className="text-slate-400 text-xs">Balance</p>
                    <h3 className="text-lg font-bold text-blue-500">₹32,400</h3>
                  </div>

                  <p className="text-green-400 text-xs flex items-center gap-1">
                    +12%
                  </p>

                </div>

                {/* GRAPH */}
                <div className="h-20 flex items-end gap-1">

                  <div className="h-4 w-2 bg-blue-400 rounded animate-pulse"></div>
                  <div className="h-6 w-2 bg-blue-400 rounded animate-pulse"></div>
                  <div className="h-8 w-2 bg-blue-500 rounded"></div>
                  <div className="h-10 w-2 bg-blue-500 rounded"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;