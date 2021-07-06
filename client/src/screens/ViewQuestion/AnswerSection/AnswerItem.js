import { useState } from "react";
import UpArrow from "../../../assets/svg/UpArrow";
import DownArrow from "../../../assets/svg/DownArrow";
import moment from "moment";
import { EditAnswer } from "./EditAnswer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";

// import ReactMarkdown from "react-markdown";

// REMOVE IF ERROR:
/* Use `…/dist/cjs/…` if you’re not in ESM! */
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
		<SyntaxHighlighter
			wrapLongLines="true"
			wrapLines="true"
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

const AnswerItem = (props) => {
  const user = props.user;
  const answer = props.answer;

  //   let verified = answer && user && user._id === answer.author._id ? true : false;

  const [clicked, setClicked] = useState(false);

  const discardHandler = (event) => {
    setClicked(false);
  };

  const deleteAnswerHandler = (event) => {};
  const editClickHandler = (event) => {
    event.preventDefault();
    var element = document.getElementById("answer-desc");
    var rect = element.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + rect.top / 2);
    setClicked(true);
  };

  return (
    <div className="mt-2 flex flex-col w-full mb-6 border-b border-gray-300">
      {!clicked && (
        <div className="flex pl-4 pt-4">
          <div className="flex flex-col items-center pt-2 ">
            <UpArrow />
            <span>0</span>
            <DownArrow />
          </div>
          <div className="flex flex-col justify-between w-full text-left pl-2 mb-2">
            <div id="answer-desc" className="pb-14 whitespace-pre-line">
              <ReactMarkdown components={components} children={answer.description} />
            </div>
            {/* <div className="text-right pr-11"></div> */}

            <div className="text-right flex justify-between items-center text-xs  ">
              <div className="text-base">
                {answer && user && user._id === answer.author._id && (
                  <button onClick={editClickHandler}>
                    <span className="text-gray-400">edit</span>
                  </button>
                )}
                {answer && user && user._id === answer.author._id && (
                  <button onClick={deleteAnswerHandler}>
                    <span className="text-red-500 ml-2">delete</span>
                  </button>
                )}
              </div>
              <div className=" px-2 m-1 h-10 rounded bg-blue-100 border-blue-300 border ">
                <span className="text-gray-500">answered </span>
                <span className="text-gray-500">
                  {moment(answer.createdAt).fromNow()}
                </span>
                <div className="text-s">{answer.author.name}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {clicked && (
        <EditAnswer answer={answer} discardHandler={discardHandler} />
      )}
    </div>
  );
};

export default AnswerItem;
