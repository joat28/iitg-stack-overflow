const express = require("express");
const homeController = require('../controllers/authController')
const router = express.Router();

router.post("/home");

router.post("/home", authCheck, homeController.home)

module.exports = router;
