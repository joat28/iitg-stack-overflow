import React, { useEffect } from "react";
import UpArrow from "../../assets/svg/UpArrow";
import DownArrow from "../../assets/svg/DownArrow";
// import { useDispatch } from "react-redux";
// import { getAllAnswers } from '../../api/index.js';
// import { stopLoadingAction } from "../../redux/loading/loading.actions";
// import Moment from "react-moment";
import moment from 'moment'

const Answer = (props) => {
	// const dispatch = useDispatch();
	const answer = props.answer;
	console.log("name of author ", answer.author.name);
	const onClickDownvotes = () => {};
	const onClickUpvotes = () => {};

	return (
		// <div>
		//     {answer.description}
		//     {answer.author.name}
		// </div>
		<div className="mt-2 flex flex-col w-full mb-6 border-b border-gray-300">
			<div className="flex pl-4 pt-4">
				<div className="flex flex-col items-center pt-2 ">
					<UpArrow onClick={onClickUpvotes} />
					<span>{answer.upvotes - answer.downvotes}</span>
					<DownArrow onClick={onClickDownvotes} />
				</div>
				<div className="flex flex-col justify-between w-full text-left pl-2 mb-2">
					<div className="pb-14 break-all">{answer.description}</div>
					{/* <div className="text-right pr-11"></div> */}
					<div className="text-right flex justify-end  text-xs  ">
						<div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
							<span className="text-gray-500">answered </span>
							<span className="text-gray-500">
									{moment(answer.createdAt).fromNow()}
									</span>
							<div className="text-s">{answer.author.name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Answer;
