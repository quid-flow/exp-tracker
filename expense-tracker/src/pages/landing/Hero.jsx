import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <>
      {/* DESKTOP HERO */}
      <section className="hidden md:block relative overflow-hidden py-24 px-6">

        {/* Blue Glow */}
        <div className="absolute top-[300px] right-[-120px] w-[500px] h-[220px] bg-blue-600/30 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Master Your Money.
              <br />
              <span className="text-blue-500">Track Smarter.</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-lg">
              Real-time expense tracking with powerful insights and intelligent
              financial clarity — built for modern users.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex gap-4">

              <Link
                to="/signup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30 hover:scale-105 transition"
              >
                Get Started
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
          <div className="relative flex justify-center">

            {/* Yellow Rising Arrow */}
            <TrendingUp
              size={220}
              className="absolute right-8 top-10 text-yellow-400/20 rotate-12"
            />

            {/* FLOATING CARD */}
            <div className="relative animate-[floatCard_6s_ease-in-out_infinite]">

              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-2xl hover:scale-[1.03] transition duration-300 w-[320px]">

                <div className="flex justify-between mb-6">

                  <div>
                    <p className="text-slate-400 text-sm">Current Balance</p>
                    <h3 className="text-2xl font-bold text-blue-500">₹52,400</h3>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-400 text-sm">This Month</p>
                    <p className="text-green-400 text-sm flex items-center gap-1 justify-end">
                      <TrendingUp size={14} />
                      +12%
                    </p>
                  </div>

                </div>

                <div className="h-32 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-xl flex items-end p-4">
                  <div className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MOBILE HERO */}
      <section className="md:hidden relative px-6 pt-16 pb-12 text-center">

        {/* Glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="space-y-8">

          <h1 className="text-3xl font-extrabold leading-tight">
            Master Your Money
            <br />
            <span className="text-blue-500">Track Smarter</span>
          </h1>

          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Real-time expense tracking with powerful insights and intelligent
            financial clarity for modern users.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">

            <Link
              to="/signup"
              className="py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30 transition"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="py-3 border border-slate-700 hover:border-blue-500 hover:text-blue-400 rounded-xl transition"
            >
              Login
            </Link>

          </div>

          {/* MOBILE CARD */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl max-w-xs mx-auto mt-8">

            <div className="flex justify-between mb-4">
              <div>
                <p className="text-slate-400 text-xs">Current Balance</p>
                <h3 className="text-xl font-bold text-blue-500">₹52,400</h3>
              </div>

              <div className="text-right">
                <p className="text-slate-400 text-xs">This Month</p>
                <p className="text-green-400 text-xs flex items-center gap-1 justify-end">
                  <TrendingUp size={12} />
                  +12%
                </p>
              </div>
            </div>

            <div className="h-20 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-lg flex items-end p-2">
              <div className="h-8 w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-md"></div>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;