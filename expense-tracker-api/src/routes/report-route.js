const express = require("express");
const router = express.Router();


const jwtMiddleware = require('../middleware/auth-middleware');
const { getBalance } = require("../controllers/report-controller");


router.get("/list", jwtMiddleware, getBalance);
// router.post("/add", jwtMiddleware, addTxn);

module.exports = router;
