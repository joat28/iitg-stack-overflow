const Question = require("../models/Question");
const Answer = require("../models/Answer");
const User = require("../models/Users");

//CREATE ONE QUESTION
module.exports.createOne = async (req, res) => {
  try {
    const { title, description, tags, author } = req.body;

    //console.log(req.body)
    const newQuestion = await Question.create({
      title,
      description,
      author,
      tags,
    });
    let user = await User.findById(req.user._id);
    user.questions.push(req.user._id)
    user.save()

    return res.status(200).json({
      message: "Question created! ",
      newQuestion,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to create question",
    });
  }
};

//GET ONE QUESTION BY ID
module.exports.getOne = async (req, res) => {
  try {
    const foundQuestion = await Question.findOne({
      _id: req.params.question_id,
    }).populate([
      { path: "author" },
      { path: "answers", populate: { path: "author" } },
    ]);
    if (!foundQuestion) {
      return res.status(404).json({
        message: "No Question Found",
      });
    }
    // console.log("Question found ", foundQuestion);
    return res.status(200).json({
      message: "Question Found",
      data: foundQuestion,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error in Finding Question",
      error,
    });
  }
};

//UPDATE ONE QUESTION BY ID
module.exports.updateOne = async (req, res) => {
  try {
    const id = req.params.question_id;
    const { title, description, tags } = req.body;
    const tagsArray = tags.trim().split(" ");
    const question = await Question.findById(id);
    // console.log(question.author._id)
    // console.log(req.user._id)
    if (question.author._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "You are not authorized to edit this question",
      });
    }
    const newQuestion = await Question.findOneAndUpdate(
      { _id: id },
      { title, description, tags: tagsArray }
    );
    // console.log("newQuestion ", newQuestion);
    return res.status(200).json({
      message: "Question updated successfully",
    });
  } catch (error) {
    console.log("Inside in updateQuestion ", error);
    return res.status(404).json({
      message: "Unable to update question",
      //  error: error.message
    });
  }
};

//DELETE ONE QUESTION BY ID
// module.exports.deleteOne = async (req, res) => {
//   const id = req.params.id;
//   const searchedQuestion = await Question.findOne({ _id: id });

//   if(!searchedQuestion) {
//     return res.status(404).json({
//       message: "No question with the ID found!!",
//     })
//   }
// };

// ALL QUESTIONS
module.exports.getAll = async (req, res) => {
  try {
    const Questions = await Question.find({}).populate("author");
    res.status(200).json({
      message: "Successfully fetched all the questions",
      data: Questions,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error in fetching questions!",
    });
  }
};

//GET ALL QUESTIONS BY TAGS

module.exports.getQuestionsTags = async (req, res) => {
  try {
    const questions = await Question.find({}).populate("author");
    if (req.body.tags === "")
      return res.status(200).json({
        message: "Succesfully fetched questions with tags",
        data: questions,
      });

    let tagsArray = req.body.tags.split(" ").map((tag) => tag.toLowerCase());
    tagsArray = [...new Set(tagsArray)];

    let questionsTags = questions.filter((question) => {
      for (let i = 0; i < tagsArray.length; i++) {
        if (question.tags.includes(tagsArray[i])) return true;
      }
      return false;
    });

    return res.status(200).json({
      message: "Succesfully fetched questions with tags",
      data: questionsTags,
    });
  } catch (error) {
    console.log("error in tags ");
    return res.status(404).json({
      message: "Unable to fetch all questions",
    });
  }
};

// GET TOP TAGS
module.exports.getTopTags = async (req, res) => {
  try {
    const mapOfQuestions = new Map();
    const questions = await Question.find({});
    questions.map((question) => {
      return question.tags.forEach((tag) => {
        if (!mapOfQuestions.get(tag)) {
          mapOfQuestions.set(tag, 1);
        } else {
          mapOfQuestions.set(tag, mapOfQuestions.get(tag) + 1);
        }
      });
    });
    const tagsArray = [...mapOfQuestions];
    tagsArray.sort(function (a, b) {
      return b[1] - a[1];
    });
    const topTagsArray = tagsArray.slice(0, Math.min(7, tagsArray.length));
    return res.status(200).json({
      message: "Sent back top tags questions successfully",
      data: topTagsArray,
    });
  } catch (error) {
    return res.status(200).json({
      message: "Could not obtain top tags",
    });
  }
};

//GET ALL THE ANSWERS FOR ONE QUESTION BY ID

module.exports.getAllAnswers = async (req, res) => {
  try {
    const id = req.params.question_id;
    const question = await Question.findById(id).populate([
      { path: "answers", populate: { path: "author" } },
    ]);

    // console.log('answers is ', question.answers)
    if (!question) throw new Error("Question not found");
    return res.status(200).json({
      message: "Fetched all answers",
      data: question.answers,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "unable to get all answer from backend",
    });
  }
};

//CREATE AN ANSWER, FOR A QUESTION
module.exports.createAnswer = async (req, res) => {
  try {
    const question_id = req.params.question_id;
    const { ans: answer} = req.body;
    const newAnswer = await Answer.create({
      description: answer,
      author: req.user._id,
    });
    // console.log("New Answer is ", newAnswer);
    let user = await User.findById(req.user._id);
    user.answers.push(newAnswer._id);
    user.save()

    let question = await Question.findById(question_id);
    question.answers.push(newAnswer._id);
    question.save();

    let populatedQuestion = await Question.findById(question_id).populate([
      { path: "answers", populate: { path: "author" } },
    ]);

    // console.log("question in createAnswer", question);
    return res.status(200).json({
      payload: populatedQuestion.answers,
      message: "Answer has been posted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Unable to post your answer",
    });
  }
};

//VOTE FEATURE

module.exports.vote = async (req, res) => {
  try {
    const { voteType } = req.body;
    const question_id = req.params.question_id;
    let inUpvotes = false,
      inDownvotes = false;
    const foundQuestion = await Question.findById(question_id);
    inUpvotes = foundQuestion.upvotes.includes(req.user._id);
    inDownvotes = foundQuestion.downvotes.includes(req.user._id);
    let newQuestion;
    let message,
      voteCount = foundQuestion.upvotes.length - foundQuestion.downvotes.length;
    if (voteType && inUpvotes) {
      newQuestion = await Question.findByIdAndUpdate(question_id, {
        upvotes: foundQuestion.upvotes.filter(
          (user_id) => user_id.toString() !== req.user._id.toString()
        ),
      });
      message = "Your upvote has been removed";
      voteCount -= 1;
    } else if (voteType && !inUpvotes && !inDownvotes) {
      newQuestion = await Question.findByIdAndUpdate(question_id, {
        upvotes: [...foundQuestion.upvotes, req.user._id],
      });
      message = "Your upvote has been added";
      voteCount += 1;
    } else if (!voteType && inDownvotes) {
      newQuestion = await Question.findByIdAndUpdate(question_id, {
        downvotes: foundQuestion.downvotes.filter(
          (user_id) => user_id.toString() !== req.user._id.toString()
        ),
      });
      message = "Your downvote has been removed";
      voteCount += 1;
    } else if (!voteType && !inDownvotes && !inUpvotes) {
      newQuestion = await Question.findByIdAndUpdate(question_id, {
        downvotes: [...foundQuestion.downvotes, req.user._id],
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
