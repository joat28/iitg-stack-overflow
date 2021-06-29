const express = require("express");
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");
const authCheck = require("../middleware/authCheck");
const question = require("./question");

const router = express.Router();
router.use("/question", question);

router.post("/register", authController.signup);
router.post("/login", authController.login);

router.get("/home", homeController.test);
router.delete("/logout", authController.logout);

module.exports = router;
