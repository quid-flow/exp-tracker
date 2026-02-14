
const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middleware/auth-middleware');


const { changePassword } = require('../controllers/user-controller');


router.post('/change-password', jwtMiddleware, changePassword);

module.exports = router;
