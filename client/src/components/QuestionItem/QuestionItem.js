import React from "react";

const QuestionItem = (props) => {
  const question = props.data;
  return (
    <>
      <div className="p-3 flex bg-white border border-gray-300 text-left">
        <div className="flex mr-2 items-center">
          <span className=" flex flex-col text-xs text-center py-2 px-5 text-gray-500">
            <span className="text-sm">
              {question.upvotes - question.downvotes}
            </span>
            votes
          </span>

          <span className="flex flex-col text-center py-2 px-5 text-xs text-gray-500">
            <span className="text-sm">{question.answers.length}</span> answers
          </span>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="text-md semibold">{question.title}</div>
          <div className="flex justify-between">
            <div>
              {question.tags.map((tag) => (
                <span className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600  rounded ">
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-right">~prabhat</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;
