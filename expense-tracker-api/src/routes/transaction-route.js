const express = require("express");
const router = express.Router();


const jwtMiddleware = require('../middleware/auth-middleware');
const { getTxn , addTxn } = require("../controllers/transaction-controller");


router.get("/list", jwtMiddleware, getTxn);
router.post("/add", jwtMiddleware, addTxn);

module.exports = router;
