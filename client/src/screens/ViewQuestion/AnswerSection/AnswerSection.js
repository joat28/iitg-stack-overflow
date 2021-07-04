import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAnswers} from '../../../redux/answers/answers.actions';
import {setLoadingAction, stopLoadingAction} from '../../../redux/loading/loading.actions'


const AnswerSection = (props) => {
    const dispatch = useDispatch();
    const {answers,loading} = useSelector(state =>  state.answers);
    useEffect(() => {
        dispatch(getAnswers(props.question_id))
    },[dispatch])

    return (
		<>
        {!loading && <div>
           <div className=" text-left ml-4 mt-4 text-xl">
						{answers.length} Answers
					</div>
					{answers.map(ans => {
                       return( <div>{ans.description}</div> )
						// <Answer question_id={ans._id} answer={ans} />
                    })}
					<div className="text-left text-lg ml-5 mb-4">Your Answer</div>
					{/* <textarea
						onChange={answerChangeHandler}
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
        </div>}
		</>
    );
};

export default AnswerSection;