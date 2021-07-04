import {React, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {getQuestionAction} from "../../../redux/questions/questions.actions"
import Spinner from '../../../components/Spinner/Spinner';
import moment from 'moment';

const QuestionSection = (question_id) => {
	const location = useLocation();
    const {question} = useSelector(state => state.question);
	const loadingQuestion = useSelector(state => state.question.loading);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getQuestionAction(location.pathname.split('/')[2]))
		// getQuestion(location.pathname.split('/')[2])
		//   .then((res) => {
		//     console.log(res.data.payload)
		//     setPost(res.data.payload)
		//     dispatch(stopLoadingAction())
		//   })
		//   .catch((error) => {
		//     dispatch(stopLoadingAction())
		//     history.push('/notfound')
		//   });
	  }, [dispatch]);
    return ( 
        <>		
				{!loadingQuestion && <div className="mt-16 flex flex-col w-screen mb-6">
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

					
				</div>}
        </>
    );
};

export default QuestionSection;