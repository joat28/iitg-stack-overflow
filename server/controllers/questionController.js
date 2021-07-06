const Question = require("../models/Question");
const Answer = require("../models/Answer");



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
  const { title, description, tags} = req.body;
  const tagsArray = tags.trim().split(' ');
  const question = await Question.findById(id);
  // console.log(question.author._id)
  // console.log(req.user._id)
  if(question.author._id.toString()!== req.user._id.toString()) {
    return res.status(401).json({
      message: "You are not authorized to edit this question"
    })
  }
  const newQuestion = await Question.findOneAndUpdate({ _id: id }, { title, description, tags: tagsArray });
  // console.log("newQuestion ", newQuestion);
  return res.status(200).json({
    message: "Question updated successfully",
  })
  } catch (error) {
    console.log('Inside in updateQuestion ',error);
     return res.status(404).json({
       message: "Unable to update question"
      //  error: error.message
      })
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

//GET ALL THE ANSWERS FOR ONE QUESTION BY ID

module.exports.getAllAnswers = async (req, res) => {
  try {
    const id = req.params.question_id;
    const question = await Question.findById(id).populate([
      { path: "answers", populate: { path: "author" } },
    ]);

    // console.log('answers is ', question.answers)
    if(!question) throw new Error('Question not found');
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
