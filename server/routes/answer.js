const express = require("express");
const answerController = require("../controllers/answerController");
const authCheck = require("../middleware/authCheck");

const router = express.Router();

router.post("/:question_id", authCheck, answerController.createAnswer);
module.exports = router;