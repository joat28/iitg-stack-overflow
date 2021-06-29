const Question = require('../models/Question');

// ONE QUESTION

module.exports.createOne = async (req, res) => {
    try {
        const payload = req.body;
        const authorId = req.body._id;
        const { title, body, tags } = payload;
        const newQuestion = await Question.create({
            title,
            body,
            tags,
            author : authorId,
        })
        console.log('question created ' , newQuestion);
    } catch (error) {
        console.log("Failed to create question ", error);
        return res.status(400).json({
            message: "Failed to create question",
        })
    }
}
module.exports.getOne = async (req, res) => {
    try{
        const foundQuestion = await Question.findOne({id: req.params.question_id });
        if(!foundQuestion){
                return res.status(404).json({
                message: "No Question Found",
            })
        }
        console.log("Question found " , foundQuestion);
        return res.status(200).json({
            message: "Question Found",
            payload: foundQuestion
        });
    }
    catch(error) {
        res.status(404).json({
            message : "Error in Finding Question",
            error,
        })
    }
}
module.exports.updateOne = async (req, res) => {
    
}
module.exports.deleteOne = async (req, res) => {
    
}

// ALL QUESTIONS
module.exports.getAll = async (req, res) => {
    
}