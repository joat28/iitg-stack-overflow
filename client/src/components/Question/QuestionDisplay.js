import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionItem from "../QuestionItem/QuestionItem";
import Spinner from "../Spinner/Spinner";
import { NavLink } from "react-router-dom";
import { getQuestionsAction, getTopQuestionsAction } from "../../redux/questions/questions.actions";
import Nothing from "../../assets/svg/Nothing";
import { useLocation } from "react-router";

const QuestionDisplay = (props) => {
  const { questions, loading } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    if(location.pathname==='/')
      dispatch(getTopQuestionsAction());
    else
      dispatch(getQuestionsAction());
  }, [dispatch, location.pathname]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && questions && (
        <div className="flex flex-col mt-16 mb-10 w-screen">
          <div className="flex justify-between items-center py-4 px-8">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <NavLink to="/question/ask">
              <button className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
                Ask Question
              </button>
            </NavLink>
          </div>
          {questions && questions.length === 0 && (
            <>
              <p className="mt-16 text-lg">No questions to show.</p>
              <div>
                <Nothing />
              </div>
            </>
          )}
          {questions && questions.length > 0 &&
            questions.map((question) => (
              <QuestionItem
                key={question._id}
                data={question}
                loading={loading}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default QuestionDisplay;
