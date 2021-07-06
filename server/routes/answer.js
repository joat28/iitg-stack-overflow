const express = require("express");
const answerController = require("../controllers/answerController");
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");

const router = express.Router();

router.patch("/:answer_id", authCheck, populateUser, answerController.updateAnswer);
module.exports = router;