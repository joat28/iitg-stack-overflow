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
router.post(`/tags/:pathname`, questionController.getQuestionsTags);

// TOP QUESTIONS
router.get("/top", questionController.getTopQuestions )

// ALL Answers
router.get("/answers/:question_id", questionController.getAllAnswers);

// POST AN ANSWER
router.post(
  "/answers/:question_id",
  authCheck,
  populateUser,
  questionController.createAnswer
);

//ONE QUESTION
router.post("/ask", authCheck, populateUser, questionController.createOne);
router.get("/:question_id", questionController.getOne);
router.patch(
  "/:question_id",
  [authCheck, populateUser],
  questionController.updateOne
);
// router.delete("/:question_id", authCheck, questionController.deleteOne);

// VOTES
router.patch('/vote/:question_id', authCheck, populateUser, questionController.vote)

router.delete('/:question_id', authCheck, populateUser, questionController.deleteQuestion)

module.exports = router;
