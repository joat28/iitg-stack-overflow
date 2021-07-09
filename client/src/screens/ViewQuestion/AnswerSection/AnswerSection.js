import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import { answerQuestion } from "../../../api";
import { setAlert } from "../../../redux/alert/alert.actions";
import { GET_ANSWERS_REQUEST } from "../../../redux/answers/answers.types";
import { getAnswers } from "../../../redux/answers/answers.actions";
import { useHistory } from "react-router-dom";
import AnswerItem from "./AnswerItem";

const AnswerSection = (props) => {
  const dispatch = useDispatch();
  const [ans, setAns] = useState("");
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);
  const { answers, loading } = useSelector((state) => state.answer);
  const loadingQuestion = useSelector((state) => state.question.loading);

  useEffect(() => {
    dispatch(getAnswers(props.question_id));
  }, [dispatch, props.question_id]);

  const answerChangeHandler = (event) => {
    setAns(event.target.value);
  };

  const answerSubmitHandler = (event) => {
    event.preventDefault();
    
    //TODO: make this an action creator
    answerQuestion({ ans, user }, props.question_id)
      .then((res) => {
        dispatch({
          type: GET_ANSWERS_REQUEST,
        });
        dispatch(getAnswers(props.question_id));
        dispatch(
          setAlert({
            message: "Your answer has been added successfully",
            status: true,
          })
        );
        setAns("");
      })
      .catch((error) => {
        dispatch(
          setAlert({
            message: "Please login to answer question",
            status: false,
          })
        );
        history.push("/login");
      });
  };

  return (
    <div>
      {(loading || loadingQuestion) && <Spinner />}
      {!loading && !loadingQuestion && answers && (
        <div className="pl-2">
          <div className=" text-left ml-4 mt-4 text-xl">
            {answers.length}
            {answers.length===1?  " Answer": " Answers"} 
          </div>
          {answers.map((answer, index) => (
            <AnswerItem key={index} answer={answer} user={user} question_id={props.question_id}/>
          ))}

          <div className="text-left text-xl pl-8 p-4">
            Your answer
          </div>
          <textarea
            onChange={answerChangeHandler}
            value={ans}
            type="text"
            className="whitespace-pre-line border-2 border-gray-300 rounded mr-4 mb-30 h-56 p-2 w-11/12 focus:border-blue-300 outline-none"
          />
          <div className="px-3 flex flex-start">
            <button
              onClick={answerSubmitHandler}
              className=" p-2 m-4 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
            >
              Post your Answer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerSection;
