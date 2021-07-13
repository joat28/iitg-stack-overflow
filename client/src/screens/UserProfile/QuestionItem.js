import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const QuestionItem = (props) => {
  const question = props.question;
  return (
    <div className="border-b border-gray-300 py-2 text-left flex justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="flex w-9 text-sm items-center justify-center text-gray-600 my-1 border border-gray-600 h-6 mr-2">
          {question.upvotes.length - question.downvotes.length}
        </div>
        <NavLink to={`/question/${question._id}`}>
          <div className=" w-full text-blue-600 hover:text-blue-400">
            {question.title.length > 115 ? (
              <span>
                {question.title.substring(
                  0,
                  Math.min(question.title.length, 115)
                )}...
              </span>
            ) : (
              <span>
                {question.title.substring(
                  0,
                  Math.min(question.title.length, 115)
                )}
              </span>
            )}
          </div>
        </NavLink>
      </div>
      <div className="text-gray-500">
        {moment(question.createdAt).fromNow()}
      </div>
    </div>
  );
};

export default QuestionItem;
