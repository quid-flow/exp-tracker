const express = require("express");
const router = express.Router();

const { getDashboardData } = require("../controllers/dashboard-controller");
const authMiddleware = require("../middleware/auth-middleware");

// 🔐 Protected route
router.get("/", authMiddleware, getDashboardData);

module.exports = router;