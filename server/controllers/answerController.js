const Answer = require("../models/Answer");
const Question = require("../models/Question");
const User = require("../models/Users");

// module.exports.createAnswer = async (req, res) => {
//   try {
//     const question_id = req.params.question_id;
//     const { ans: answer} = req.body;
//     const newAnswer = await Answer.create({
//       description: answer,
//       author: req.user._id,
//     });
//     let user = await User.findById(req.user._id);
//     user.answers.push(newAnswer._id);
//     user.save()
//     // console.log("New Answer is ", newAnswer);
//     let question = await Question.findById(question_id);
//     question.answers.push(newAnswer._id);
//     question.save();

//     let populatedQuestion = await Question.findById(question_id).populate([
//       { path: "answers", populate: { path: "author" } },
//     ]);

//     // console.log("question in createAnswer", question);
//     return res.status(200).json({
//       payload: populatedQuestion.answers,
//       message: "Answer has been posted successfully",
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(400).json({
//       message: "Unable to post your answer",
//     });
//   }
// };

module.exports.updateAnswer = async (req, res) => {
  console.log("inside updateAnswer controller");
  try {
    const id = req.params.answer_id;
    const { description } = req.body;
    const answer = await Answer.findById(id);
    // console.log("in upDateAnswer", answer);
    // if(!answer) throw new Error("Answer not found");
    console.log("answerId ", answer.author._id);
    console.log("userid ", req.user._id);
    if (answer.author._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "You are not authorized to edit this answer",
      });
    }
    const newAnswer = await Answer.findOneAndUpdate(
      { _id: id },
      { description }
    );
    // console.log("newQuestion ", newQuestion);
    return res.status(200).json({
      message: "Answer updated successfully",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update answer",
      //  error: error.message
    });
  }
};

module.exports.vote = async (req, res) => {
  try {
    Answer;
    const { voteType } = req.body;
    const answer_id = req.params.answer_id;
    let inUpvotes = false,
      inDownvotes = false;
    const foundAnswer = await Answer.findById(answer_id);
    inUpvotes = foundAnswer.upvotes.includes(req.user._id);
    inDownvotes = foundAnswer.downvotes.includes(req.user._id);
    let newQuestion;
    let message,
      voteCount = foundAnswer.upvotes.length - foundAnswer.downvotes.length;
    if (voteType && inUpvotes) {
      newAnswer = await Answer.findByIdAndUpdate(answer_id, {
        upvotes: foundAnswer.upvotes.filter(
          (user_id) => user_id.toString() !== req.user._id.toString()
        ),
      });
      message = "Your upvote has been removed";
      voteCount -= 1;
    } else if (voteType && !inUpvotes && !inDownvotes) {
      newAnswer = await Answer.findByIdAndUpdate(answer_id, {
        upvotes: [...foundAnswer.upvotes, req.user._id],
      });
      message = "Your upvote has been added";
      voteCount += 1;
    } else if (!voteType && inDownvotes) {
      newAnswer = await Answer.findByIdAndUpdate(answer_id, {
        downvotes: foundAnswer.downvotes.filter(
          (user_id) => user_id.toString() !== req.user._id.toString()
        ),
      });
      message = "Your downvote has been removed";
      voteCount += 1;
    } else if (!voteType && !inDownvotes && !inUpvotes) {
      newAnswer = await Answer.findByIdAndUpdate(answer_id, {
        downvotes: [...foundAnswer.downvotes, req.user._id],
      });
      message = "Your downvote has been added";
      voteCount -= 1;
    } else {
      message = "First remove your previous vote";
    }
    // console.log('new question is ',newQuestion);
    res.status(200).json({
      message,
      voteCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      voteCount,
    });
  }
};
