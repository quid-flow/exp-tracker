import { useRef, useState } from "react";

const OtpInput = ({ length = 6, onVerify, loading }) => {

  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    const finalOtp = newOtp.join("");

    if (finalOtp.length === length) {
      onVerify(finalOtp);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");

    if (!/^\d+$/.test(paste)) return;

    const pasteArr = paste.slice(0, length).split("");
    const newOtp = [...otp];

    pasteArr.forEach((val, i) => {
      newOtp[i] = val;
    });

    setOtp(newOtp);

    if (pasteArr.length === length) {
      onVerify(pasteArr.join(""));
    }
  };

  return (
    <div className="flex justify-center gap-2 md:gap-3" onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          disabled={loading}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-10 md:w-12 md:h-12 text-center bg-slate-900/60 border border-slate-700 
          rounded-xl text-white text-lg md:text-xl focus:ring-2 focus:ring-blue-500/40 outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInput;