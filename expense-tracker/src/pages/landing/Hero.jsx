import { Link } from "react-router-dom";
import React from "react";
// import Signup from "../../pages/auth/Signup";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Master Your Money.
            <br />
            <span className="text-blue-500">Track Smarter.</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-lg">
            Real-time expense tracking with powerful insights and intelligent
            financial clarity — built for modern users.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 rounded-xl shadow-lg shadow-blue-500/30"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition rounded-xl"
            >
              Login
            </Link>
          </div>

        </div>

        {/* Right Side - Dashboard Preview */}
        <div className="relative">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
            
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-slate-400 text-sm">Current Balance</p>
                <h3 className="text-2xl font-bold text-blue-500">₹52,400</h3>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">This Month</p>
                <p className="text-green-400 text-sm">+12% Growth</p>
              </div>
            </div>

            <div className="h-32 bg-gradient-to-r from-blue-500/20 to-blue-600/10 rounded-xl flex items-end p-4">
              <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg opacity-80"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;