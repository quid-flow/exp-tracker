import { useState } from "react";
import OtpInput from "../auth/OtpInput";

const ForgotPasswordModal = ({ closeModal }) => {

  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {

    setLoading(true);

    // API call
    // /api/auth/forget-password

    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    },1000);

  };

  const verifyOtp = async (otp) => {

    setLoading(true);

    // API call verify-reset-otp

    setTimeout(() => {
      setLoading(false);
      setStep("reset");
    },1000);

  };

  const resetPassword = async (e) => {

    e.preventDefault();

    setLoading(true);

    // API call reset-password

    setTimeout(() => {
      setLoading(false);
      closeModal();
    },2000);

  };



  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-sm">

        {/* EMAIL STEP */}

        {step === "email" && (

          <div>

            <h3 className="text-xl font-semibold mb-4 text-center">
              Forgot Password
            </h3>

            <input
              type="email"
              placeholder="Enter your email"
              className="input mb-4"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <button
              onClick={sendEmail}
              className="w-full py-3 bg-blue-600 rounded-xl"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>

          </div>

        )}


        {/* OTP STEP */}

        {step === "otp" && (

          <div className="text-center">

            <h3 className="text-xl font-semibold mb-4">
              Verify OTP
            </h3>

            <OtpInput onComplete={verifyOtp} />

            {loading && (
              <p className="text-sm mt-4 text-slate-400">
                Verifying...
              </p>
            )}

          </div>

        )}


        {/* RESET PASSWORD STEP */}

        {step === "reset" && (

          <form onSubmit={resetPassword}>

            <h3 className="text-xl font-semibold mb-4 text-center">
              Reset Password
            </h3>

            <input
              type="password"
              placeholder="New Password"
              className="input mb-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input mb-4"
            />

            <button className="w-full py-3 bg-blue-600 rounded-xl">
              {loading ? "Resetting..." : "Reset Password"}
            </button>

          </form>

        )}

      </div>

    </div>

  );

};

export default ForgotPasswordModal;