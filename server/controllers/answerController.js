const Answer = require("../models/Answer");
const Question = require("../models/Question");

module.exports.createAnswer = async (req, res) => {
  try {
    const question_id = req.params.question_id;
    const { ans: answer, user } = req.body;
    const newAnswer = await Answer.create({
      description: answer,
      author: user._id,
    });
    console.log("New Answer is ", newAnswer);
    let question = await Question.findById(question_id);
    question.answers.push(newAnswer._id);
    question.save();

    let populatedQuestion = await Question.findById(question_id).populate([
			{ path: "answers", populate: { path: "author" } },
		]);

    console.log("question in createAnswer", question);
    return res.status(200).json({
      payload: populatedQuestion.answers,
      message: "Answer has been posted successfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Unable to post your answer",
    });
  }
};


