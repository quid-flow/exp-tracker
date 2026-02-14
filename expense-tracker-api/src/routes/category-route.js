const express = require("express");
const router = express.Router();


const jwtMiddleware = require('../middleware/auth-middleware');
const { addcategory , editcategory, getcategory } = require("../controllers/category-controller");


router.post("/add", jwtMiddleware, addcategory);
router.put("/edit", jwtMiddleware, editcategory);
router.get("/list", jwtMiddleware, getcategory);

module.exports = router;
