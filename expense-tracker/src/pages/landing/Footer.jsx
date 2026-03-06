import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">
            Quid<span className="text-blue-500">Flow</span>
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Smart financial tracking for modern users.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm text-slate-400">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-400 transition">
            Signup
          </Link>
        </div>

        {/* Right */}
        <div className="text-slate-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} QuidFlow. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;