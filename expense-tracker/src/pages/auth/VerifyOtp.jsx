import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { emailid, purpose } = location.state || {};

  // If someone directly opens /verify-otp
  if (!emailid || !purpose) {
    navigate("/signup");
  }

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      alert("Enter complete OTP");
      return;
    }

    try {
      setLoading(true);

      console.log("OTP Verify Payload:", {
        emailid,
        otp: finalOtp,
      });

      // 🔹 Replace with real API call later

      setTimeout(() => {
        navigate("/login"); // temporary
      }, 800);

    } catch (err) {
      alert("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-md space-y-6 text-center">

        <h2 className="text-2xl font-bold text-white">
          Verify OTP
        </h2>

        <p className="text-slate-400 text-sm">
          Enter the 6-digit code sent to <br />
          <span className="text-blue-500">{emailid}</span>
        </p>

        <div className="flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center bg-slate-800 border border-slate-700 rounded-lg text-white text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-medium disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

      </div>
    </div>
  );
};

export default VerifyOtp;