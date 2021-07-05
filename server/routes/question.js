const express = require("express");
const questionController = require("../controllers/questionController");
const authCheck = require("../middleware/authCheck");

const router = express.Router();

// ALL Answers
router.get("/answers/:question_id", questionController.getAllAnswers);
router.post("/answers/:question_id", authCheck ,questionController.createAnswer);

//ONE QUESTION
router.post("/ask", authCheck, questionController.createOne);
router.get("/:question_id", questionController.getOne);
router.patch("/:question_id", authCheck, questionController.updateOne);
// router.delete("/:question_id", authCheck, questionController.deleteOne);

//ALL QUESTIONS
router.get("/", questionController.getAll);

module.exports = router;
