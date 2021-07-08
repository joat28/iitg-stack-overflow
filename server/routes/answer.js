const express = require("express");
const answerController = require("../controllers/answerController");
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");

const router = express.Router();

//VOTES
router.patch('/vote/:answer_id', authCheck, populateUser, answerController.vote)

router.patch("/:answer_id", authCheck, populateUser, answerController.updateAnswer);

router.delete("/:answer_id", authCheck, populateUser, answerController.deleteAnswer);

module.exports = router;