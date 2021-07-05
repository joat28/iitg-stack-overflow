import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import { answerQuestion } from "../../../api";
import { setAlert } from "../../../redux/alert/alert.actions";
import { ADD_ANSWER, GET_ANSWERS } from "../../../redux/answers/answers.types";
import { getAnswers } from "../../../redux/answers/answers.actions";
import { useHistory } from "react-router-dom";
import UpArrow from "../../../assets/svg/UpArrow";
import DownArrow from "../../../assets/svg/DownArrow";
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
  }, [dispatch]);

  const answerChangeHandler = (event) => {
    setAns(event.target.value);
  };

  const answerSubmitHandler = (event) => {
    event.preventDefault();
    answerQuestion({ ans, user }, props.question_id)
      .then((res) => {
        dispatch({
          type: ADD_ANSWER,
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
            {answers.length} Answers
          </div>
          {answers.map((answer) => (
            <AnswerItem answer={answer} />
          ))}
          <textarea
            onChange={answerChangeHandler}
            value={ans}
            type="text"
            className=" border-2 border-gray-300 rounded mr-4 mb-30 h-56 p-2 w-11/12 focus:border-blue-300 outline-none"
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
