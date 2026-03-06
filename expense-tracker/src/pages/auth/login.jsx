import { useState } from "react";
import { Link } from "react-router-dom";
import ForgotPasswordModal from "../../components/auth/ForgotPasswordModal";

const Login = () => {

  const [showForgot,setShowForgot] = useState(false);

  const handleLogin = (e)=>{
    e.preventDefault();

    // login api
  };

  return (

    <div className="min-h-screen bg-slate-950 text-white relative">

      {/* Glow Background */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full"></div>


      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex min-h-screen items-center justify-center px-6 relative z-10">

        <div className="w-full max-w-6xl grid grid-cols-2 gap-16 items-center">


          {/* LEFT SIDE */}

          <div className="space-y-6">

            <h1 className="text-4xl font-bold leading-tight">
              Welcome Back
              <br />
              <span className="text-blue-500">Continue Tracking.</span>
            </h1>

            <p className="text-slate-400 max-w-md">
              Login to access your expense dashboard and stay in control of your finances.
            </p>

            <div className="space-y-3 text-slate-300">
              <p>✔ Track spending</p>
              <p>✔ Manage income</p>
              <p>✔ Smart insights</p>
            </div>

          </div>



          {/* LOGIN CARD */}

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

            <h2 className="text-2xl font-semibold mb-6">
              Login to your account
            </h2>

            <form onSubmit={handleLogin} className="space-y-5">

              <input
                type="email"
                placeholder="Email address"
                className="input"
              />

              <input
                type="password"
                placeholder="Password"
                className="input"
              />


              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30">
                Login
              </button>

            </form>


            {/* Forgot password */}

            <div className="text-right mt-3">

              <button
                onClick={()=>setShowForgot(true)}
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



            {/* Google Login */}

            <button className="w-full py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
              Continue with Google
            </button>



            {/* Signup */}

            <p className="text-sm text-slate-400 mt-6 text-center">

              New user?{" "}

              <Link to="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>

            </p>

          </div>

        </div>

      </div>



      {/* ================= MOBILE ================= */}

      <div className="md:hidden flex min-h-screen items-center justify-center px-5 relative z-10">

        <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              className="input"
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
            />

            <button className="w-full py-3 bg-blue-600 rounded-xl">
              Login
            </button>

          </form>


          <div className="text-right mt-3">

            <button
              onClick={()=>setShowForgot(true)}
              className="text-sm text-blue-500"
            >
              Forgot Password?
            </button>

          </div>



          {/* Google */}

          <div className="mt-6">

            <button className="w-full py-3 bg-white text-black rounded-xl">
              Continue with Google
            </button>

          </div>


          <p className="text-sm text-slate-400 mt-6 text-center">

            New user?{" "}

            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>

          </p>

        </div>

      </div>



      {/* Forgot Password Modal */}

      {showForgot && (

        <ForgotPasswordModal
          closeModal={()=>setShowForgot(false)}
        />

      )}

    </div>

  );
};

export default Login;