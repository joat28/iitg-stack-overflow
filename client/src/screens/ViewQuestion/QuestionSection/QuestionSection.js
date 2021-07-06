import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionAction } from '../../../redux/questions/questions.actions';
import moment from 'moment';
import UpArrow from '../../../assets/svg/UpArrow'
import DownArrow from '../../../assets/svg/DownArrow'
import { useHistory } from 'react-router-dom';
import EditQuestion from "./EditQuestion"

const QuestionSection = (props) => {

	const {question,loading} = useSelector(state => state.question);
	const loadingAnswers = useSelector(state => state.answer.loading);

	const {user} = useSelector(state => state.auth);

	const [clicked,setClicked] = useState(false);
	const history = useHistory()
    const dispatch = useDispatch();    
    useEffect(() => {
        dispatch(getQuestionAction(props.question_id, history));
		window.scrollTo(0,0)
    },[dispatch])

	const discardHandler = (event) => {
		setClicked(false)
	}

	const deleteQuestionHandler = (event) => {
		
	}
	const editClickHandler = (event) => {
		event.preventDefault();
		setClicked(true);
	}
	// const tagsTextArea = <input value={question.tags}/> 
	

    return (
        <>
        {(!loading && !loadingAnswers && question) && <div className="mt-16 flex flex-col mb-6">
			{!clicked && <>
					<div className="border-b pb-6 border-gray-300">
						<div className="text-2xl py-2 text-left px-2">
							 {question.title}
						</div>
						<div className="text-xs text-right text-gray-500">
							Asked &nbsp;
							{moment(question.createdAt).format("lll")}
						</div>
					</div>
					<div className="flex pl-4 pt-4">
						<div className="flex flex-col items-center pt-3">
							<UpArrow  />
							<span>0</span>
							<DownArrow  />
						</div>
						<div className="flex flex-col justify-between w-full text-left pl-2 mb-5">
							{!clicked && <div className="pb-20 ">{question.description}</div>}
							{clicked && <textarea className="h-44 w-20">{question.description}</textarea>}
							<div className="text-left ">
								{question.tags.map((tag) => (
									<span className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600 my-1.5  rounded">
										{tag}
									</span>
								))}
							</div>
							<div className="pt-2">
								{/*TODO: authenticate user first */}
							{question.author._id === user._id && <button onClick={editClickHandler}><span className="text-gray-400">edit</span></button>}
							{question.author._id === user._id && <button onClick={deleteQuestionHandler}><span className="text-red-500 ml-2">delete</span></button>}
							</div>
							{/* <div className="text-right pr-11"></div> */}
							{<div className="text-right flex justify-end  text-xs  ">
								<div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
									<span className="text-gray-500">asked </span>
									<span className="text-gray-500">
										{moment(question.createdAt).fromNow()}
									</span>
									<div className="text-s">{question.author.name}</div>
								</div>
							</div>}
						</div>
					</div>
					</>}
				{clicked && <EditQuestion question={question} discardHandler={discardHandler}/>}
				
				</div>}
        </>
    );
};

export default QuestionSection;

/*
import React, { useState, useEffect } from "react";
import UpArrow from "../../assets/svg/UpArrow";
import DownArrow from "../../assets/svg/DownArrow";
import Spinner from "../Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { setAlert } from "../../redux/alert/alert.actions";
import { answerQuestion } from "../../api/index";
import Answer from "./Answer";

// import { getQuestion } from "../../api/index";
import {
	setLoadingAction,
	stopLoadingAction,
} from "../../redux/loading/loading.actions";

const ViewQuestion = (props) => {
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => state.loading);
	let postVotes = 0;
	if (!loading) postVotes = question.upvotes - question.downvotes;
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
				question.answers = res.data.payload;
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
						<div className="text-2xl py-2 text-left px-2">
							{question.title}
						</div>
						<div className="text-xs text-right text-gray-500">
							Asked &nbsp;
							<Moment format="DD-MM-YYYY">{`${question.createdAt}`}</Moment>
						</div>
					</div>
					<div className="flex pl-4 pt-4">
						<div className="flex flex-col items-center pt-3">
							<UpArrow onClick={onClickUpvotes} />
							<span>{votes}</span>
							<DownArrow onClick={onClickDownvotes} />
						</div>
						<div className="flex flex-col justify-between w-full text-left pl-2 mb-5">
							<div className="pb-20 ">{question.description}</div>
							<div className="text-left ">
								{question.tags.map((tag) => (
									<span className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600 my-1.5  rounded">
										{tag}
									</span>
								))}
							</div>
							{/* <div className="text-right pr-11"></div> *//*}
							<div className="text-right flex justify-end  text-xs  ">
								<div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
									<span className="text-gray-500">asked </span>
									<Moment
										className="text-gray-500"
										format=" HH:mm"
									>{`${question.createdAt}`}</Moment>
									<div className="text-s">{question.author.name}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-left text-lg ml-5 mb-4">Your Answer</div>
					<textarea
						onChange={answerChangeHandler}
						value={ans}
						type="text"
						className="border-2 border-gray-300 rounded mx-4 mb-30 h-40 px-3 py-2"
					/>
					<div className="px-3 flex flex-start">
						<button
							onClick={answerSubmitHandler}
							className=" p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
						>
							Post your Answer
						</button>
					</div>
					{question.answers.map((ans) => (
						<Answer question_id={question._id} answer={ans} />
					))}
				</div>
			)}
		</React.Fragment>
	);
};
*/