import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { emailid, purpose } = location.state || {};

  useEffect(() => {
    if (!emailid || !purpose) {
      navigate("/signup");
    }
  }, []);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);

  const inputsRef = useRef([]);

  // TIMER
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // INPUT CHANGE
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    const finalOtp = newOtp.join("");
    if (finalOtp.length === 6) {
      handleSubmit(finalOtp);
    }
  };

  // BACKSPACE
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  // PASTE
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");

    if (!/^\d{6}$/.test(paste)) return;

    const newOtp = paste.split("");
    setOtp(newOtp);

    inputsRef.current[5].focus();

    handleSubmit(paste);
  };

  // VERIFY
  const handleSubmit = async (otpValue) => {
    const finalOtp = otpValue || otp.join("");

    if (finalOtp.length !== 6) {
      setError("Enter complete OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log("Verify OTP:", {
        emailid,
        otp: finalOtp
      });

      // 👉 API call here

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      setError("Invalid OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // RESEND
  const handleResend = () => {
    if (timer > 0) return;

    console.log("Resend OTP");

    setTimer(30);
    setOtp(["", "", "", "", "", ""]);
    inputsRef.current[0].focus();
  };

  return (

    // PC & TABLET
    <div>
      <div className="hidden md:flex min-h-screen bg-slate-950 items-center justify-center px-6"
        onPaste={handlePaste}>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-md space-y-6 text-center">

          <h2 className="text-2xl font-bold text-white">
            Verify OTP
          </h2>

          <p className="text-slate-400 text-sm">
            OTP sent to : <br />
            <span className="text-blue-500">{emailid}</span>
          </p>

          {/* OTP INPUT */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center bg-slate-900/60 border border-slate-700 rounded-xl text-white text-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            ))}
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* BUTTON */}
          <button
            onClick={() => handleSubmit()}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] transition rounded-xl py-3 font-medium disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* RESEND */}
          <p className="text-sm text-slate-400">
            Didn’t receive code?{" "}
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className="text-blue-500 disabled:text-slate-500"
            >
              Resend {timer > 0 && `(${timer}s)`}
            </button>
          </p>

        </div>
      </div>


      <div
        className="md:hidden min-h-screen bg-slate-950 flex items-center justify-center px-6"
        onPaste={handlePaste}>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-md space-y-6 text-center">

          <h2 className="text-2xl font-bold text-white">
            Verify OTP
          </h2>

          <p className="text-slate-400 text-sm">
            OTP sent to : <br />
            <span className="text-blue-500">{emailid}</span>
          </p>

          {/* OTP INPUT */}
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center bg-slate-900/60 border border-slate-700 rounded-xl text-white text-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            ))}
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* BUTTON */}
          <button
            onClick={() => handleSubmit()}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] transition rounded-xl py-3 font-medium disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* RESEND */}
          <p className="text-sm text-slate-400">
            Didn’t receive code?{" "}
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className="text-blue-500 disabled:text-slate-500"
            >
              Resend {timer > 0 && `(${timer}s)`}
            </button>
          </p>

        </div>
      </div>
    </div>

  );
};

export default VerifyOtp;