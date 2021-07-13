const Answer = require("../models/Answer");
const Question = require("../models/Question");
const User = require("../models/Users");

module.exports.updateAnswer = async (req, res) => {
  try {
    const id = req.params.answer_id;
    const { description } = req.body;
    const answer = await Answer.findById(id);

    if (answer.author._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "You are not authorized to edit this answer",
      });
    }
    const newAnswer = await Answer.findOneAndUpdate(
      { _id: id },
      { description }
    );
    return res.status(200).json({
      message: "Answer updated successfully",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update answer",
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
    
    res.status(200).json({
      message,
      voteCount,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      voteCount,
    });
  }
};

module.exports.deleteAnswer = async (req, res) => {
  try {
    // SEND ONLY THE ID OF THE ANSWER
    const answer_id = req.params.answer_id;
    const hasAnswered = req.user.answers.includes(answer_id);
    if (!hasAnswered) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const answer = await Answer.findByIdAndDelete(answer_id);

    if (!answer) {
      return res.status(404).json({
        message: "No answer found by that id/ Unauthorized",
      });
    }
    const newUpdatedUser = await User.findByIdAndUpdate(req.user._id, {
      answers: [
        ...req.user.answers.filter(
          (ans) => ans._id.toString() !== answer_id.toString()
        ),
      ],
    });

    // TODO: Find how to use pull method of updating

    let question = await Question.findById(answer.question, (error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Could not find Question",
        });
      } else if (!data) {
        return res.status(404).json({
          message: "No Question found",
        });
      }
      data.answers = [
        ...data.answers.filter(
          (ans) => ans._id.toString() !== answer_id.toString()
        ),
      ];
      data.save();
      
    });

    
    const newQuestion = await Question.findById(answer.question).populate({
      path: "answers",
      populate: { path: "author" },
    });
    
    return res.status(200).json({
      message: "Deleted successfully",
      data: newQuestion.answers,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete answer",
    });
  }
};
