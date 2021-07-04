const Question = require("../models/Question");

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
		// console.log('inside')
		const id = req.params.question_id;
		const question = await Question.findById(id).populate([
			{ path: "answers", populate: { path: "author" } },
		]);
		return res.status(200).json({
			message: "Fetched all answers",
			data: question.answers,
		});
	} catch (error) {
		console.log(error);
		return res.status(400);
	}
};
