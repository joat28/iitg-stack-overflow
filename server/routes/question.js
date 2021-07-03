const express = require("express");
const questionController = require("../controllers/questionController");
const authCheck = require("../middleware/authCheck");

const router = express.Router();

//ALL QUESTIONS
router.get("/", questionController.getAll);

//ONE QUESTION
router.post("/ask", authCheck, questionController.createOne);
router.get("/:question_id", questionController.getOne);
router.put("/:question_id", authCheck, questionController.updateOne);
router.delete("/:question_id", authCheck, questionController.deleteOne);

module.exports = router;
