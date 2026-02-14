const express = require("express");
const router = express.Router();


const jwtMiddleware = require('../middleware/auth-middleware');
const { gettxn , addtxn } = require("../controllers/transaction-controller");


router.get("/list", jwtMiddleware, gettxn);
router.post("/add", jwtMiddleware, addtxn);

module.exports = router;
