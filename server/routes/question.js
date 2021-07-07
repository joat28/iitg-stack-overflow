const express = require("express");
const questionController = require("../controllers/questionController");
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");

const router = express.Router();

//ALL QUESTIONS
router.get("/", questionController.getAll);

// TOP SEVEN TAGS
router.get("/topTags", questionController.getTopTags);

// ALL QUESTIONS BY TAGS
router.post("/tags", questionController.getQuestionsTags);


// ALL Answers
router.get("/answers/:question_id", questionController.getAllAnswers);
router.post(
  "/answers/:question_id",
  authCheck,
  questionController.createAnswer
);

//ONE QUESTION
router.post("/ask", authCheck, questionController.createOne);
router.get("/:question_id", questionController.getOne);
router.patch(
  "/:question_id",
  [authCheck, populateUser],
  questionController.updateOne
);
// router.delete("/:question_id", authCheck, questionController.deleteOne);

module.exports = router;
