import React from "react";
import { NavLink } from "react-router-dom";

const QuestionItem = (props) => {
  const question = props.data;
  const loading = props.loading;
  return (
    <>
      {!loading && (
        <div className="p-3 flex bg-white border-r border-t border-b border-gray-200 text-left">
          <div className="flex mr-2 items-center">
            <span className=" flex flex-col text-xs text-center py-2 px-5 text-gray-500">
              <span className="text-sm">
                {question &&
                  question.upvotes.length - question.downvotes.length}
              </span>
              votes
            </span>

            <span className="flex flex-col text-center py-2 px-5 text-xs text-gray-500">
              <span className="text-sm">{question.answers.length}</span>{" "}
              {question.answers.length === 1 ? "answer" : "answers"}
            </span>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="text-md semibold" style={{ color: "#0077CC" }}>
              <NavLink
                to={`/question/${question._id}`}
                className="hover:text-blue-400"
              >
                {question.title}
              </NavLink>
            </div>
            <div className="flex justify-between">
              <div>
                {question.tags.map((tag, index) => (
                  <span
                    key={`${index}`}
                    className="m-1 text-xs px-2 py-0.5 border-2 border-blue-100 hover:bg-blue-200 text-blue-600  rounded"
                    style={{ backgroundColor: "#E1ECF4" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-right">{question.author.name}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionItem;
