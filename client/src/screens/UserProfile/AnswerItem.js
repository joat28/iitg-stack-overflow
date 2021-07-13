import React from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
const AnswerItem = (props) => {
  const answer = props.answer;
  return (
    <div className="border-b border-gray-300 py-2 text-left flex justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="flex w-9 text-sm items-center justify-center text-gray-600 my-1 border border-gray-600 h-6 mr-2">
          {answer.upvotes.length - answer.downvotes.length}
        </div>
        <NavLink to={`/question/${answer.question}`}>
          <div className=" w-full text-blue-600 hover:text-blue-400">
            {answer.description.length > 115 ? (
              <span>
                {answer.description.substring(
                  0,
                  Math.min(answer.description.length, 115)
                )}...
              </span>
            ) : (
              <span>
                {answer.description.substring(
                  0,
                  Math.min(answer.description.length, 115)
                )}
              </span>
            )}
          </div>
        </NavLink>
      </div>
      <div className="text-gray-500">
        {moment(answer.createdAt).fromNow()}
      </div>
    </div>
  );
};

export default AnswerItem;
