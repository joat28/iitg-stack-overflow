const Question = require("../models/Question");
const Answer = require("../models/Answer");
// ONE QUESTION

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
module.exports.updateOne = async (req, res) => {
  console.log("req.body", req.body);
  const id = req.body._id;
  console.log(id);
  const newQuestion = await Question.findOneAndReplace({ _id: id }, req.body);
  // console.log("newQuestion ", newQuestion);
  res.end();
};

module.exports.deleteOne = async (req, res) => {};

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

module.exports.getAllAnswers = async (req, res) => {
  try {
    const id = req.params.question_id;
    const question = await Question.findById(id).populate([
      { path: "answers", populate: { path: "author" } },
    ]);

    // console.log('answers is ', question.answers)
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
