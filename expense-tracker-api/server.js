require("dotenv").config();
console.log("DB_URL is =", process.env.DATABASE_URL, " <<<<<< MAKE SURE YOU REMOVE THIS IN PRODUCTION ENVIRONMENT !!!");

const express = require("express");
const pool = require("./src/config/dbconfig");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes import
const authRoutes = require("./src/routes/auth-route");
const userRoutes = require("./src/routes/user-route");
const categoryRoutes = require("./src/routes/category-route");
const transactionRoutes = require("./src/routes/transaction-route");

// base test route
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is running 🚀");
});

app.get("/route-test", (req, res) => {
  res.send("Route works");
});


// 🔍 DB TEST ROUTE
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      success: true,
      time: result.rows[0],
    });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({
      success: false,
      error: "DB connection failed",
    });
  }
});

// AUTH ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/transaction", transactionRoutes);



// server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
