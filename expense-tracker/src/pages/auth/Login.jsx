import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import ForgotPasswordModal from "../../components/auth/ForgotPasswordModal";
import apiHelper from "../../api/apiHelper";


const Login = () => {

  const [showForgot, setShowForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("🟡 Form:", form);

  if (!form.email || !form.password) {
    return setError("Required fields missing*");
  }

  setError("");
  setLoading(true); // ✅ fix

  const reqData = {
    emailid: form.email,
    password: form.password
  };

  console.log("🔵 Request:", reqData);

  try {
    const data = await apiHelper.post("/auth/login", reqData);

    console.log("🟢 Response:", data);

    if (data.RtnCode === 1) {
      localStorage.setItem("token", data.Data.token); // Token from response
      navigate("/dashboard");
    } else {
      setError(data.RtnMsg);
    }

  } catch (err) {
    setError(err?.RtnMsg || "Login failed");
  } finally {
    setLoading(false);
  }
};





  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden text-white">

      {/* GLOBAL GLOW (same as signup) */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex min-h-screen items-center justify-center px-10 relative z-10">

        <div className="grid grid-cols-2 max-w-6xl w-full gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h1 className="text-4xl font-bold leading-tight">
              Welcome Back <br />
              <span className="text-blue-500">Track Smarter</span>
            </h1>

            <p className="text-slate-400 max-w-md">
              Continue managing your finances with real-time insights and smarter tracking.
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <p>✔ Real-time tracking</p>
              <p>✔ Smart analytics</p>
              <p>✔ Secure dashboard</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input text-slate-400"
                onChange={handleChange}
                value={form.email}
              />

              {/* PASSWORD */}
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input pr-10 text-slate-400"
                  onChange={handleChange}
                  value={form.password}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <button
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
              >
                {loading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            {/* Forgot */}
            <div className="text-right mt-3">
              <button
                onClick={() => setShowForgot(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-slate-700"></div>
              <span className="px-3 text-slate-400 text-sm">OR</span>
              <div className="flex-1 border-t border-slate-700"></div>
            </div>

            {/* Google */}
            <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
              />
              Continue with Google
            </button>

            <p className="text-sm text-slate-400 mt-6 text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500">
                Signup
              </Link>
            </p>

          </div>

        </div>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden min-h-screen flex items-center justify-center px-6 relative z-10">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-slate-400 text-sm mb-6">
            Login to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input text-slate-400"
              onChange={handleChange}
              value={form.email}
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input pr-10 text-slate-400"
                onChange={handleChange}
                value={form.password}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <button
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
            >
              {loading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          <div className="text-right mt-3">
            <button
              onClick={() => setShowForgot(true)}
              className="text-sm text-blue-500"
            >
              Forgot Password?
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-slate-700"></div>
            <span className="px-3 text-slate-400 text-sm">OR</span>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-xl">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5"
            />
            Continue with Google
          </button>

          <p className="text-sm text-slate-400 mt-5 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>

        </div>

      </div>

      {/* Forgot Modal */}
      {showForgot && (
        <ForgotPasswordModal closeModal={() => setShowForgot(false)} />
      )}

    </div>
  );
};

export default Login;