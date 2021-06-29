import React from "react";
import { useSelector } from "react-redux";
import QuestionItem from "../QuestionItem/QuestionItem";

const QuestionDisplay = () => {
	const questions = useSelector((state) => state.question.questions);
	return (
		<div
			className="flex flex-col mt-16 
        w-screen"
		>
			<h1>Top Questions</h1>
			{questions.map((question) => (
				<QuestionItem key={question._id} data={question} />
			))}
		</div>
	);
};

export default QuestionDisplay;
