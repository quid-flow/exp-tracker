
const express = require("express");
const router = express.Router();

const {
  userSignup,
  verifySignupOtp,
  userLogin,
  forgetPasword,
  verifyResetOtp,
  ResetPassword
} = require("../controllers/auth-controller");

console.log("AUTH ROUTE LOADED");
// PUBLIC AUTH ROUTES
router.post("/signup", userSignup);
router.post("/verify-signup-otp", verifySignupOtp);
router.post("/login", userLogin);
router.post("/forget-password", forgetPasword);
router.post("/verify-reset-otp", verifyResetOtp);
router.post("/reset-password", ResetPassword);

module.exports = router;
