import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [showOtpModal,setShowOtpModal] = useState(false);
  const [verifying,setVerifying] = useState(false);

  const otpRefs = useRef([]);

  const handleSignup = (e)=>{
    e.preventDefault();
    setShowOtpModal(true);
  };


  const handleOtpChange = (e,index)=>{

    const value = e.target.value;

    if(!/^[0-9]?$/.test(value)) return;

    e.target.value = value;

    if(value && index < 5){
      otpRefs.current[index+1].focus();
    }

    checkOtp();

  };


  const handleKeyDown = (e,index)=>{

    if(e.key === "Backspace"){

      if(!e.target.value && index > 0){
        otpRefs.current[index-1].focus();
      }

    }

  };


  const handlePaste = (e)=>{

    const paste = e.clipboardData.getData("text");

    if(!/^\d{6}$/.test(paste)) return;

    paste.split("").forEach((num,i)=>{
      otpRefs.current[i].value = num;
    });

    verifyOtp(paste);

  };


  const checkOtp = ()=>{

    const otp = otpRefs.current.map(i=>i.value).join("");

    if(otp.length === 6){
      verifyOtp(otp);
    }

  };


  const verifyOtp = (otp)=>{

    console.log("OTP:",otp);

    setVerifying(true);

    setTimeout(()=>{

      setVerifying(false);

      navigate("/login");

    },5000);

  };


  return (

    <div className="min-h-screen bg-slate-950 text-white relative">


      {/* Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full"></div>



      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex min-h-screen items-center justify-center px-6 relative z-10">  
      {/* <div className="hidden md:flex min-h-screen items-center justify-center px-6"> */}

        <div className="w-full max-w-6xl grid grid-cols-2 gap-16 items-center">


          <div className="space-y-6">

            <h1 className="text-4xl font-bold">
              Master Your Money
              <br/>
              <span className="text-blue-500">Track Smarter.</span>
            </h1>

            <p className="text-slate-400 max-w-md">
              Create your account and start managing your finances smarter.
            </p>

          </div>



          {/* <div className="bg-slate-900 border-none border-slate-800 rounded-2xl p-10"> */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Create new account
            </h2>


            <form onSubmit={handleSignup} className="space-y-5">

              <div className="grid grid-cols-2 gap-4">

                <input type="text" placeholder="First name" className="input"/>

                <input type="text" placeholder="Last name" className="input"/>

              </div>

              <input type="email" placeholder="Email address" className="input"/>

              <input type="password" placeholder="Password" className="input"/>

              <select className="input">

                <option>Select gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>

              </select>


              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/30">
                Create Account
              </button>

            </form>



            <div className="flex items-center my-6">

              <div className="flex-1 border-t border-slate-700"></div>

              <span className="px-3 text-slate-400 text-sm">
                OR
              </span>

              <div className="flex-1 border-t border-slate-700"></div>

            </div>



            <button className="w-full py-3 bg-white text-black rounded-xl">
              Continue with Google
            </button>



            <p className="text-sm text-slate-400 mt-6 text-center">

              Already have an account?{" "}

              <Link to="/login" className="text-blue-500">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>



      {/* ================= MOBILE ================= */}

      <div className="md:hidden flex min-h-screen items-center justify-center px-5 relative z-10">
      {/* <div className="md:hidden flex min-h-screen items-center justify-center px-5"> */}

        <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Create Account
          </h2>


          <form onSubmit={handleSignup} className="space-y-4">

            <input type="text" placeholder="First name" className="input"/>

            <input type="text" placeholder="Last name" className="input"/>

            <input type="email" placeholder="Email" className="input"/>

            <input type="password" placeholder="Password" className="input"/>

            <select className="input">

              <option>Select gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>

            </select>

            <button className="w-full py-3 bg-blue-600 rounded-xl">
              Create Account
            </button>

          </form>

        </div>

      </div>



      {/* ================= OTP MODAL ================= */}

      {showOtpModal && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onPaste={handlePaste}
        >

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-sm text-center">

            <h3 className="text-xl font-semibold mb-2">
              Verify Email
            </h3>

            <p className="text-slate-400 text-sm mb-6">
              Enter the 6 digit code sent to your email
            </p>



            {!verifying && (

              <div className="flex justify-center gap-3">

                {[...Array(6)].map((_,i)=>(

                  <input
                    key={i}
                    maxLength="1"
                    ref={(el)=>otpRefs.current[i]=el}
                    onChange={(e)=>handleOtpChange(e,i)}
                    onKeyDown={(e)=>handleKeyDown(e,i)}
                    className="w-12 h-12 text-center text-lg bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 outline-none"
                  />

                ))}

              </div>

            )}



            {verifying && (

              <div className="flex flex-col items-center gap-4">

                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

                <p className="text-sm text-slate-400">
                  Verifying OTP...
                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </div>

  );

};

export default Signup;