import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestionAction } from "../../../redux/questions/questions.actions";
import moment from "moment";
import UpArrow from "../../../assets/svg/UpArrow";
import DownArrow from "../../../assets/svg/DownArrow";
import { useHistory } from "react-router-dom";
import EditQuestion from "./EditQuestion";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

// REMOVE IF ERROR:
/* Use `…/dist/cjs/…` if you’re not in ESM! */
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

////////////

const QuestionSection = (props) => {
  const { question, loading } = useSelector((state) => state.question);
  const loadingAnswers = useSelector((state) => state.answer.loading);

  const { user } = useSelector((state) => state.auth);

  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionAction(props.question_id, history));
    window.scrollTo(0, 0);
  }, [dispatch]);

  const discardHandler = (event) => {
    setClicked(false);
  };

  const deleteQuestionHandler = (event) => {};
  const editClickHandler = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setClicked(true);
  };
  // const tagsTextArea = <input value={question.tags}/>

  return (
    <>
      {!loading && !loadingAnswers && question && (
        <div className="mt-16 flex flex-col mb-6">
          {!clicked && (
            <>
              <div className="border-b pb-6 border-gray-300">
                <div className="text-2xl py-2 text-left px-2">
                  {question.title}
                </div>
                <div className="text-xs text-right text-gray-500">
                  Asked &nbsp;
                  {moment(question.createdAt).format("lll")}
                </div>
              </div>
              <div className="flex pl-4 pt-4">
                <div className="flex flex-col items-center pt-3">
                  <UpArrow />
                  <span>0</span>
                  <DownArrow />
                </div>
                <div className="flex flex-col justify-between w-full text-left pl-2 mb-5">
                  {!clicked && (
                    <div className="pb-20 whitespace-pre-line">
						<ReactMarkdown components={components} children={question.description} />
                    </div>
                  )}
                  {clicked && (
                    <textarea className="h-44 w-20 whitespace-pre-line">
                      {question.description}
                    </textarea>
                  )}
                  <div className="text-left ">
                    {question.tags.map((tag) => (
                      <span className="m-1 text-xs px-2 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600 my-1.5  rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    {/*TODO: authenticate user first */}
                    {user && question.author._id === user._id && (
                      <button onClick={editClickHandler}>
                        <span className="text-gray-400">edit</span>
                      </button>
                    )}
                    {user && question.author._id === user._id && (
                      <button onClick={deleteQuestionHandler}>
                        <span className="text-red-500 ml-2">delete</span>
                      </button>
                    )}
                  </div>
                  {/* <div className="text-right pr-11"></div> */}
                  {
                    <div className="text-right flex justify-end  text-xs  ">
                      <div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
                        <span className="text-gray-500">asked </span>
                        <span className="text-gray-500">
                          {moment(question.createdAt).fromNow()}
                        </span>
                        <div className="text-s">{question.author.name}</div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </>
          )}
          {clicked && (
            <EditQuestion question={question} discardHandler={discardHandler} />
          )}
        </div>
      )}
    </>
  );
};

export default QuestionSection; 

