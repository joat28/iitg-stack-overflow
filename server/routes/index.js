const express = require("express");
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const authCheck = require("../middleware/authCheck");

const router = express.Router();

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.post("/home", authCheck, homeController.home);
router.get("/home", homeController.test);
router.delete('/logout', authController.logout);

module.exports = router;
