const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Render internal DB
  },
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL connected successfully");
});

module.exports = pool;
