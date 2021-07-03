import React, { useState, useEffect } from "react";
import UpArrow from "../../assets/svg/UpArrow";
import DownArrow from "../../assets/svg/DownArrow";
import Spinner from "../Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "../../redux/alert/alert.actions";
import { answerQuestion } from "../../api/index";
import Answer from "./Answer";
import moment from "moment";

// import { getQuestion } from "../../api/index";
import {
	setLoadingAction,
	stopLoadingAction,
} from "../../redux/loading/loading.actions";

const ViewQuestion = (props) => {
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.loading);
	let postVotes = 0;
	if (!loading) postVotes = props.post.upvotes - props.post.downvotes;
	const [votes, setVotes] = useState(postVotes);

	const [ans, setAns] = useState("");

	const user = useSelector((state) => state.auth.user);
	const answerChangeHandler = (event) => {
		setAns(event.target.value);
	};

	const onClickUpvotes = () => {
		
		return setVotes((vote) => vote + 1);
	};
	const onClickDownvotes = () => {
		return setVotes((vote) => vote - 1);
	};
	const answerSubmitHandler = () => {
		dispatch(setLoadingAction());
		answerQuestion({ ans, user }, props.id)
			.then((res) => {
				props.post.answers = [...res.data.payload];
				dispatch(
					setAlert({
						message: "Your answer has been added successfully",
						status: true,
					})
				);
				setTimeout(() => {
					dispatch(stopLoadingAction());
				}, 2000);
			})
			.catch((error) => {
				dispatch(setAlert({ message: error.message, status: false }));
				dispatch(stopLoadingAction());
			});
	};

	return (
		<React.Fragment>
			{loading && <Spinner />}
			{!loading && (
				<div className="mt-16 flex flex-col w-screen mb-6">
					<div className="border-b pb-6 border-gray-300">
						<div className="text-2xl py-2 text-left px-4">
							{props.post.title}
						</div>
						<div className="text-xs text-right text-gray-500">
							Asked &nbsp;
							{moment(props.post.createdAt).format("lll")}
						</div>
					</div>
					<div className="flex pl-4 pt-4">
						<div className="flex flex-col items-center pt-3 ">
							<UpArrow onClick={onClickUpvotes} />
							<span>{votes}</span>
							<DownArrow onClick={onClickDownvotes} />
						</div>
						<div className="flex flex-col justify-between w-full text-left pl-2 mb-5">
							<div className="pb-20 ">{props.post.description}</div>
							<div className="text-left ">
								{props.post.tags.map((tag) => (
									<span className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600 my-1.5  rounded">
										{tag}
									</span>
								))}
							</div>
							{/* <div className="text-right pr-11"></div> */}
							<div className="text-right flex justify-end  text-xs  ">
								<div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
									<span className="text-gray-500">asked </span>
									{/* <Moment
										className="text-gray-500"
										format=" HH:mm"
									>{`${props.post.createdAt}`}</Moment> */}
									<span className="text-gray-500">
										{moment(props.post.createdAt).fromNow()}
									</span>
									<div className="text-s">{props.post.author.name}</div>
								</div>
							</div>
						</div>
					</div>

					<div className=" text-left ml-4 mt-4 text-xl">
						{props.post.answers.length} Answers
					</div>
					{props.post.answers.map((ans) => (
						<Answer question_id={props.post._id} answer={ans} />
					))}
					<div className="text-left text-lg ml-5 mb-4">Your Answer</div>
					<textarea
						onChange={answerChangeHandler}
						value={ans}
						type="text"
						className="border-2 border-gray-300 rounded break-all overflow-clip overflow-hidden mx-4 mb-30 h-40 px-3 py-2"
					/>
					<div className="px-3 flex flex-start mb-16">
						<button
							onClick={answerSubmitHandler}
							className=" p-1 m-1 bg-blue-500 border-2 border-blue-700 mt-2 rounded text-white hover:bg-blue-600 h-10"
						>
							Post your Answer
						</button>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

/*
answers: []
author: {_id: "60db657dea567a1bec8d0239", name: "prabhat", email: "prabhat@gmail.com", password: "$2a$10$bI5wV/CrB6kaepm8F5yDI.qcfKi6diCn50c2CvNni/NKrKqoKsqcq", createdAt: "2021-06-29T18:25:01.186Z", …}
comments: []
createdAt: "2021-06-29T18:42:00.255Z"
description: "how to implement login in stackoverflow"
downvotes: 0
tags: (3) ["css", "html", "web"]
title: "testing the api"
updatedAt: "2021-06-29T18:42:00.255Z"
upvotes: 0
__v: 0
_id: "60db6978790e3a1e380c588c"
__proto__: Object
*/

export default ViewQuestion;
