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
    // console.log("New Answer is ", newAnswer);
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

module.exports.updateAnswer = async (req, res) => {
  console.log("inside updateAnswer controller");
  try {
  const id = req.params.answer_id;
  const { description} = req.body;
  const answer = await Answer.findById(id);
  console.log("in upDateAnswer", answer);
  // if(!answer) throw new Error("Answer not found");
  console.log("answerId ",answer.author._id);
  console.log("userid ",req.user._id);
  if(answer.author._id.toString()!== req.user._id.toString()) {
    return res.status(401).json({
      message: "You are not authorized to edit this answer"
    })
  }
  const newAnswer = await Answer.findOneAndUpdate({ _id: id }, {description });
  // console.log("newQuestion ", newQuestion);
  return res.status(200).json({
    message: "Answer updated successfully",
  })
  } catch (error) {
     return res.status(404).json({
       message: "Unable to update answer"
      //  error: error.message
      })
  }
};




