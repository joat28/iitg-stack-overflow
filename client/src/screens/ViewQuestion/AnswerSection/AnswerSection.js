import { React, useEffect } from "react";
import { getAnswers } from "../../../redux/answers/answers.actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";

const AnswerSection = (props) => {
  const dispatch = useDispatch();
  const { answers, loading } = useSelector((state) => state.answer);
  const loadingQuestion = useSelector((state) => state.question.loading);
  useEffect(() => {
    dispatch(getAnswers(props.question_id));
  }, [dispatch]);

  return (
    <div>
      {(loading || loadingQuestion) && <Spinner />}
      {!loading &&
        !loadingQuestion &&
        answers &&
        answers.map((answer) => (
          <div className="break-all">{answer.description} </div>
        ))}
    </div>
  );
};

export default AnswerSection;
