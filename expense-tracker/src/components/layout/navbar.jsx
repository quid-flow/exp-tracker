import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-none border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Quid<span className="text-blue-500">Flow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4 text-sm">
          <Link to="/" className="block hover:text-blue-400">
            Home
          </Link>
          <Link to="/login" className="block hover:text-blue-400">
            Login
          </Link>
          <Link
            to="/signup"
            className="block bg-blue-600 px-4 py-2 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;