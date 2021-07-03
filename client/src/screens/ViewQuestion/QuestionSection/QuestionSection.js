import React from 'react';
import {useSelector} from "react-redux"
import Spinner from '../../../components/Spinner/Spinner';
import moment from 'moment';

const QuestionSection = (question_id) => {
    const {question} = useSelector(state => state.question);
    const {loading} = useSelector(state => state.loading);

    return ( 
        <>
        {loading && <Spinner />}
		{!loading && (
				<div className="mt-16 flex flex-col w-screen mb-6">
					<div className="border-b pb-6 border-gray-300">
						<div className="text-2xl py-2 text-left px-4">
							{question.title}
						</div>
						<div className="text-xs text-right text-gray-500">
							Asked &nbsp;
							{moment(question.createdAt).format("lll")}
						</div>
					</div>
					<div className="flex pl-4 pt-4">
						{/* <div className="flex flex-col items-center pt-3 ">
							<UpArrow onClick={onClickUpvotes} />
							<span>{votes}</span>
							<DownArrow onClick={onClickDownvotes} />
						</div> */}
						<div className="flex flex-col justify-between w-full text-left pl-2 mb-5">
							<div className="pb-20 ">{question.description}</div>
							<div className="text-left ">
								{question.tags.map((tag) => (
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
										{moment(question.createdAt).fromNow()}
									</span>
									<div className="text-s">{question.author.name}</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div className=" text-left ml-4 mt-4 text-xl">
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
					</div> */}
				</div>
			)}
        </>
    );
};

export default QuestionSection;