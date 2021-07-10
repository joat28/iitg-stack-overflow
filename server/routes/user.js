const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");

//GET ALL USERS
router.get("/", userController.getAllUsers);

//GET A SINGLE USER
router.get("/:user_id", userController.getUser);

//UPDATE A USER
router.patch("/:user_id", authCheck, populateUser, userController.updateUser);

module.exports = router;
