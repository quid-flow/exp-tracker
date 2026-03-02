import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">
          Quid<span className="text-blue-500">Flow</span>
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-blue-400 transition">Features</a>
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">

        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Master Your Money.
            <br />
            <span className="text-blue-500">Track Smarter.</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-lg">
            Real-time expense tracking with powerful insights and
            intelligent financial management — built for modern users.
          </p>

          <div className="flex gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-500/30"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 border border-slate-600 rounded-xl hover:border-blue-500 hover:text-blue-400 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Dashboard Mockup */}
        <div className="flex-1 relative">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800">
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
              <div className="h-16 w-full bg-blue-500 rounded-lg opacity-70"></div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-bold mb-12">Powerful Financial Tools</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-4 text-blue-500">
                Real-Time Tracking
              </h4>
              <p className="text-slate-400">
                Monitor your income and expenses instantly with smart categorization.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-4 text-blue-500">
                Monthly Insights
              </h4>
              <p className="text-slate-400">
                Visual summaries that help you understand spending patterns.
              </p>
            </div>

            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-xl font-semibold mb-4 text-blue-500">
                Secure & Reliable
              </h4>
              <p className="text-slate-400">
                Your financial data is encrypted and securely stored in the cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">
          Take Control of Your Financial Future
        </h3>
        <Link
          to="/signup"
          className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition shadow-xl shadow-blue-500/30"
        >
          Start Tracking Today
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} QuidFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;