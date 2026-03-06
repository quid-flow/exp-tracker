import { useRef } from "react";

const OtpInput = ({ onComplete }) => {

  const inputs = useRef([]);

  const handleChange = (e, index) => {

    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    e.target.value = value;

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }

    checkOtp();
  };


  const handleKeyDown = (e, index) => {

    if (e.key === "Backspace") {

      if (!e.target.value && index > 0) {
        inputs.current[index - 1].focus();
      }

    }

  };


  const checkOtp = () => {

    const otp = inputs.current.map(input => input.value).join("");

    if (otp.length === 6) {
      onComplete(otp);
    }

  };


  return (

    <div className="flex justify-center gap-3">

      {[...Array(6)].map((_, index) => (

        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputs.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center text-lg bg-slate-950 border border-slate-700 rounded-lg focus:border-blue-500 outline-none"
        />

      ))}

    </div>

  );

};

export default OtpInput;