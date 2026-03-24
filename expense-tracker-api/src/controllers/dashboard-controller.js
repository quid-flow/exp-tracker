const pool = require("../config/dbconfig");
const jwt = require("../utils/jwt");
const {
  successresponse,
  failureresponse,
  servererrorresponse,
} = require("../utils/response-helper");


const getDashboardData = async (req, res) => {
  try {
    const userid = req.user.userid;

    // 🔥 abhi dummy data (baad me DB)
    return res.json({
      balance: 52400,
      income: 80000,
      expense: 27600,
      transactions: [
        { id: 1, title: "Swiggy", amount: -450 },
        { id: 2, title: "Salary", amount: 50000 },
        { id: 3, title: "Petrol", amount: -200 }
      ]
    });

  } catch (err) {
    console.error("Dashboard Error:", err);
    return res.status(500).json({ message: "Error loading dashboard" });
  }
};

module.exports = {
  getDashboardData
};