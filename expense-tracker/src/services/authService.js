import apiHelper from "../api/apiHelper";

export const signupUser = async (data) => {
  return apiHelper.post("/auth/signup", data);
};

export const verifySignupOtp = async (data) => {
  return apiHelper.post("/auth/verify-signup-otp", data);
};

export const loginUser = async (data) => {
  return apiHelper.post("/auth/login", data);
};