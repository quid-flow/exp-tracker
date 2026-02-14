const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query("SELECT 1")
  .then(() => console.log("✅ Neon DB test query successful"))
  .catch(err => console.error("❌ Neon DB test failed", err));

module.exports = pool;
