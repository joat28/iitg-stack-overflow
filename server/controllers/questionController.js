const Question = require("../models/Question");

// ONE QUESTION

module.exports.createOne = async (req, res) => {
	try {
		const { title, description,tags , author } = req.body;
		console.log(req.body)
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
		}).populate('author')
		if (!foundQuestion) {
			return res.status(404).json({
				message: "No Question Found",
			});
		}
		console.log("Question found ", foundQuestion);
		return res.status(200).json({
			message: "Question Found",
			payload: foundQuestion,
		});
	} catch (error) {
		res.status(404).json({
			message: "Error in Finding Question",
			error,
		});
	}
};
module.exports.updateOne = async (req, res) => {};
module.exports.deleteOne = async (req, res) => {};

// ALL QUESTIONS
module.exports.getAll = async (req, res) => {
    try {
        const Questions = await Question.find({}).populate('author');
        res.status(200).json({
            message: "Successfully fetched all the questions",
            data: Questions,
        })
	} catch(error) {
		return res.status(400).json({
			message: "Error in fetching questions!"
		})
	}
};
