import { useState } from "react";
import { UpArrowInactive, UpArrowActive } from "../../../assets/svg/UpArrow";
import {
  DownArrowInactive,
  DownArrowActive,
} from "../../../assets/svg/DownArrow";
import moment from "moment";
import {Link} from "react-router-dom"
import { EditAnswer } from "./EditAnswer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkdown from "react-markdown";
import { voteAnsAPI } from "../../../api";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../redux/alert/alert.actions";
import { deleteAnswerAction, getAnswers } from "../../../redux/answers/answers.actions";

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
  const dispatch = useDispatch();
  const user = props.user;
  const answer = props.answer;
  
  //   let verified = answer && user && user._id === answer.author._id ? true : false;

  const [clicked, setClicked] = useState(false);

  const discardHandler = (event) => {
    setClicked(false);
  };

  const deleteAnswerHandler = (event) => {
    const value = window.confirm('Delete Answer?');
    if(value) dispatch(deleteAnswerAction(answer._id));
    return;
  };
  const editClickHandler = (event) => {
    event.preventDefault();
    var element = document.getElementById("answer-desc");
    var rect = element.getBoundingClientRect();
    window.scrollTo(0, window.scrollY + rect.top / 2);
    setClicked(true);
  };

  const voteHandler = (voteType) => {
    // voteType = true => upvote       voteValue = 1 => push vote in backend
    //  voteType = false => downvote    voteValue = 1 => remove vote in backend
    voteAnsAPI(answer._id, voteType)
      .then((res) => {
        dispatch(
          setAlert({
            message: res.data.message,
            status: true,
          })
        );
        // console.log(res.data.voteCount);
        dispatch(getAnswers(props.question_id))
        
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(
            setAlert({
              message: "Please login",
              status: false,
            })
          );
        } else {
          dispatch(
            setAlert({
              message: "Please try again later",
              status: false,
            })
          );
        }
      });
  };

  return (
    <div className="mt-2 flex flex-col w-full mb-6 border-b border-gray-300">
      {!clicked && (
        <div className="flex pl-4 pt-4">
          <div className="flex flex-col items-center pt-2 ">
            {user && answer.upvotes.includes(user._id) ? (
              <button
                onClick={() => {
                  voteHandler(true);
                }}
              >
                <UpArrowActive />
              </button>
            ) : (
              <button
                onClick={() => {
                  voteHandler(true);
                }}
              >
                <UpArrowInactive />
              </button>
            )}

            <span>{answer.upvotes.length - answer.downvotes.length}</span>

            {user && answer.downvotes.includes(user._id) ? (
              <button
                onClick={() => {
                  voteHandler(false);
                }}
              >
                <DownArrowActive />
              </button>
            ) : (
              <button
                onClick={() => {
                  voteHandler(false);
                }}
              >
                <DownArrowInactive />
              </button>
            )}
          </div>
          <div className="flex flex-col justify-between w-full text-left pl-2 mb-2">
            <div id="answer-desc" className="pb-14 whitespace-pre-line">
              <ReactMarkdown
                components={components}
                children={answer.description}
              />
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
              <div className=" px-2 pr-4 m-1 rounded bg-blue-100 border-blue-300 border flex flex-col">
                <div className="pb-1">
                  <span className="text-gray-500">answered </span>
                  <span className="text-gray-500">
                    {moment(answer.createdAt).fromNow()}
                  </span>
                </div>
                <div className="flex flex-row pb-1">
                  <img
                    alt="img"
                    className="w-8 h-8 border border-gray-300"
                    src={`https://avatars.dicebear.com/api/jdenticon/${answer.author.name}.svg`}
                  ></img>
                  <Link
                    to={`/users/${answer.author._id}`}
                    className="text-right pl-1 text-blue-600 hover:text-blue-400"
                  >
                    {answer.author.name}
                  </Link>
                </div>
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
