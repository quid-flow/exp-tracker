import { data, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import OtpInput from "../../components/auth/OtpInput";
import apiHelper from "../../api/apiHelper";


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🟡 Form:", form);

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      return setError("Required fields missing*");
    }

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match");
    }

    if (!form.terms) {
      return setError("Please accept Terms & Conditions");
    }

    setError("");
    setSignupLoading(true);

    const reqData = {
      emailid: form.email,
      password: form.password,
      firstname: form.firstName,
      lastname: form.lastName,
      gender: Number(form.gender)
    };

    console.log("🔵 Request:", reqData);

    try {
      const data = await apiHelper.post("/auth/signup", reqData);

      console.log("🟢 Response:", data);

      if (data.RtnCode === 1) {

        // 🔥 FIX
        setOtp(data.Data?.otp);

        setShowOtpModal(true);

        console.log("✅ OTP:", data.Data?.otp);

      } else {
        setError(data.RtnMsg);
      }

    } catch (err) {
      console.log("🔴 Error:", err);
      setError(err?.RtnMsg || "Signup failed");
    } finally {
      setSignupLoading(false);
    }
  };

  const handleVerifyOtp = async (otp) => {
    setLoading(true);

    try {
      const data = await apiHelper.post("/auth/verify-signup-otp", {
        emailid: form.email,
        otp: otp
      });

      if (data.RtnCode === 1) {
        setShowOtpModal(false);
        navigate("/login");
      } else {
        setError(data.RtnMsg);
      }

    } catch (err) {
      setError(err.RtnMsg || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">

      {/* GLOBAL GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex min-h-screen items-center justify-center px-10 relative z-10">

        <div className="grid grid-cols-2 max-w-6xl w-full gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h1 className="text-4xl font-bold text-white leading-tight">
              Master Your Money <br />
              <span className="text-blue-500">Track Smarter</span>
            </h1>

            <p className="text-slate-400 max-w-md">
              Create your account and start managing your finances smarter with real-time insights.
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <p>✔ Real-time insights</p>
              <p>✔ Smart savings</p>
              <p>✔ Secure & encrypted</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl">

            <div className="flex items-center justify-between gap-3 mb-6 rounded-full w-full px-4 py-2">
              <span className="text-2xl font-bold text-white">Create Account </span>
              <span> {error && <span className="text-red-600 text-xs">{error}</span>}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-2 gap-3">
                <input name="firstName" placeholder="First Name" onChange={handleChange} className="input text-slate-400" />
                <input name="lastName" placeholder="Last Name" onChange={handleChange} className="input text-slate-400" />
              </div>

              <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input text-slate-400" />

              {/* PASSWORD */}
              <div className="relative">
                <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} className="input pr-10 text-slate-400" />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 cursor-pointer text-slate-400">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              {/* CONFIRM */}
              <div className="relative">
                <input name="confirmPassword" type={showConfirm ? "text" : "password"} placeholder="Confirm Password" onChange={handleChange} className="input pr-10 text-slate-400" />
                <span onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-3 cursor-pointer text-slate-400">
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <select name="gender" onChange={handleChange} className="input  text-slate-400">
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <input type="checkbox" name="terms" onChange={handleChange} />
                <span>I agree to <span className="text-blue-500">Terms</span></span>
              </div>

              {/* {error && <p className="text-red-400 text-sm">{error}</p>} */}

              <button
                disabled={signupLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
              >

                {signupLoading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}

                {signupLoading ? "Processing..." : "Get Started"}

              </button>

            </form>

            {/* GOOGLE */}
            <div className="mt-5">
              <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-xl">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
                Continue with Google
              </button>
            </div>

            <p className="text-sm text-slate-400 mt-4 text-center">
              Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
            </p>

          </div>

          {/* OTP Modal */}
          {showOtpModal && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">


              <div className="bg-white/5 backdrop-blur-2xl border-none rounded-2xl p-8 w-full max-w-sm text-center">

                <h3 className="text-xl font-semibold text-white mb-4">
                  Verify OTP
                </h3>

                <div className="text-white text-sm mb-6">
                  OTP sent to : <br />
                  <span className="text-slate-400 lowercase">{form.email}</span>
                  {otp && (
                    <div className="text-green-400 text-sm mt-2">
                      OTP : {otp}
                    </div>
                  )}
                </div>

                <OtpInput onVerify={handleVerifyOtp} loading={loading} otpValue={otp}  />

                {/* <button
                  disabled={loading}
                  className="w-full mt-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
                > */}
                  {loading && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  {loading ? "" : ""}
                {/* </button> */}
                {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

              </div>
            </div>
          )}

        </div>
      </div>












      {/* ================= MOBILE ================= */}
      <div className="min-h-screen bg-slate-950 flex md:hidden items-center justify-center px-6 relative">

        {/* GLOW */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full"></div>

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl z-10">

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-center text-white mb-2">
            Create Account
          </h2>

          <p className="text-center text-slate-400 text-sm mb-6">
            Start managing your money smarter
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div className="grid grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="input text-slate-400"
              />
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="input text-slate-400"
              />
            </div>

            {/* EMAIL */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="input text-slate-400"
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={handleChange}
                className="input pr-10 text-slate-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={handleChange}
                className="input pr-10 text-slate-400"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 cursor-pointer text-slate-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* GENDER */}
            <select
              name="gender"
              onChange={handleChange}
              className="input text-slate-400"
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>

            {/* TERMS */}
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <input
                type="checkbox"
                name="terms"
                onChange={handleChange}
              />
              <span>
                I agree to <span className="text-blue-500">Terms & Conditions</span>
              </span>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            {/* BUTTON */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] active:scale-95 transition shadow-lg shadow-blue-500/30">
              Get Started
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-slate-700"></div>
            <span className="px-3 text-slate-400 text-sm">OR</span>
            <div className="flex-1 border-t border-slate-700"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-xl font-medium hover:scale-[1.02] transition shadow-md">

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />

            Continue with Google
          </button>

          {/* LOGIN */}
          <p className="text-sm text-slate-400 mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>

          {/* TRUST */}
          <p className="text-xs text-slate-500 mt-4 text-center">
            Trusted by 10,000+ users
          </p>

        </div>

        {showOtpModal && ( // Mobile OTP Modal
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl p-6 w-full max-w-sm text-center">

              <h3 className="text-lg font-semibold text-white mb-3">
                Verify OTP
              </h3>

              <p className="text-slate-400 text-sm mb-5">
                OTP sent to : <br />
                <span className="text-white">{form.email}</span>
                {otp && (
                  <div className="text-green-400 text-sm mt-2">
                    OTP: {otp}
                  </div>
                )}
              </p>

              <OtpInput onVerify={handleVerifyOtp} loading={loading}  otpValue={otp} />

              {/* <button
                disabled={loading}
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center gap-2"
              > */}
                {loading && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                {loading ? "Verifying..." : ""}
              {/* </button> */}

              {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Signup;



