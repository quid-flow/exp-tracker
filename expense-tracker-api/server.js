const express = require("express");
const pool = require("./src/config/dbconfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is running 🚀");
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
    res.status(500).json({ success: false, error: "DB connection failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
