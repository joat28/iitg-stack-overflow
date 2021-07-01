const express = require("express");
const questionController = require("../controllers/questionController");
const authCheck = require("../middleware/authCheck");

const router = express.Router();

//ONE QUESTION
router.post("/ask", authCheck ,questionController.createOne);
router.get("/:question_id", questionController.getOne);
router.post("/:question_id", authCheck, questionController.updateOne);
router.delete("/:question_id", authCheck, questionController.deleteOne);

//ALL QUESTIONS
router.get("/", questionController.getAll);

module.exports = router;
