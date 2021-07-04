import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionAction } from "../../redux/questions/questions.actions";
import { setLoadingAction} from "../../redux/loading/loading.actions";

const QuestionItem = (props) => {
	const question = props.data;
  	const dispatch = useDispatch();
	const clickHandler = (event) => {
    dispatch(setLoadingAction());
    dispatch(getQuestionAction(props.data._id));
		console.log("Clicked a particular question");
	};

	return (
		<>
			<div className="p-3 flex bg-white border-r border-t border-b border-gray-200 text-left">
				<div className="flex mr-2 items-center">
					<span className=" flex flex-col text-xs text-center py-2 px-5 text-gray-500">
						<span className="text-sm">
							{question.upvotes - question.downvotes}
						</span>
						votes
					</span>

					<span className="flex flex-col text-center py-2 px-5 text-xs text-gray-500">
						<span className="text-sm">{question.answers.length}</span> answers
					</span>
				</div>
				<div className="flex flex-col justify-between w-full">
					<div className="text-md semibold" style={{ color: "#0077CC" }}>
						<NavLink
							onClick={clickHandler}
							to={`/question/${question._id}`}
							className="hover:text-blue-400"
						>
							{question.title}
						</NavLink>
					</div>
					<div className="flex justify-between">
						<div>
							{question.tags.map((tag, index) => (
								<span
									key={`${index}`}
									className="m-1 text-xs px-2 py-0.5 border-2 border-blue-100 hover:bg-blue-200 text-blue-600  rounded"
									style={{ backgroundColor: "#E1ECF4" }}
								>
									{tag}
								</span>
							))}
						</div>

						<span className="text-right">{question.author.name}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default QuestionItem;
