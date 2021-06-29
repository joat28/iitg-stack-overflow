const Question = require('../models/Questions');

// ONE QUESTION

module.exports.createOne = async (req, res) => {
    try {
        const payload = req.body;
        const { title, body, answer, author, comments, tags } = payload;
        
    }catch(error) {
        
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
// module.exports.updateOne = async (req, res) => {
//     try{
//         Question.retrieveOne
//     }
// }
// module.exports.deleteOne = async (req, res) => {
//     try{
//         Question.retrieveOne
//     }
// }

// // ALL QUESTIONS
// module.exports.getAll = async (req, res) => {
//     try{
//         Question.retrieveOne
//     }
// }