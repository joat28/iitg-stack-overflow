import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../api/index";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";
import QuestionItem from "./QuestionItem";
import AnswerItem from "./AnswerItem";
import EditProfileCard from "./EditProfileCard";

const UserProfileScreen = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const history = useHistory();
  const [user, setUser] = useState({});
  const currentUser = useSelector((state) => state.auth.user);
  const [radio, setRadio] = useState(true);
  const [editClick, setEditClick] = useState(false);
  useEffect(() => {
    
    getUser(location.pathname.split("/")[2])
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        // console.log(error);
        history.push('/notfound');
      });
  }, [location.pathname, history]);

  const radioChangeHandler = (type) => {
    if (type === "question" && radio) return;
    if (type === "answer" && !radio) return;
    setRadio((radio) => !radio);
  };

  const editClickHandler = () => {
    setEditClick((editClick) => !editClick);
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-row">
      <LeftSideBar />
      <div className="m-8 mt-20 w-full pl-72">
        {(!user || !user.name) && <Spinner />}
        {user && user.name && (
          <div className="flex w-full">
            <div className="flex flex-col items-center">
              <div
                className="flex flex-col px-6 p-6 pb-2 h-68  relative border border-gray-300 rounded w-52"
                style={{ boxShadow: "inset 0 8.5em 0 #eff0f1" }}
              >
                <img
                  className="w-40 h-40 block border border-gray-300 bg-white"
                  src={`https://avatars.dicebear.com/api/jdenticon/${(currentUser && currentUser._id===user._id)?currentUser.name:user.name}.svg`}
                  alt="profile"
                ></img>
                <span className="text-gray-600 text-lg font-bold mt-0.5">
                  {(currentUser && currentUser._id===user._id)?currentUser.name:user.name}
                </span>
                <div>
                  <span className="text-xs text-gray-500"> Joined: </span>
                  <span className="text-gray-600 text-md font-semibold ">
                    {moment(user.createdAt).fromNow()}
                  </span>
                </div>
              </div>
              {!editClick && currentUser && currentUser._id === user._id && (
                <button
                  onClick={editClickHandler}
                  className="text-white rounded mt-4 bg-blue-500 border-2 border-blue-700 hover:bg-blue-600 px-6 py-2"
                >
                  Edit
                </button>
              )}
              {editClick && (
                <button
                  onClick={editClickHandler}
                  className="text-white rounded mt-4 bg-red-500 border-2 border-red-700 hover:bg-red-600 px-4 py-2"
                >
                  Cancel
                </button>
              )}
            </div>
            {editClick && <EditProfileCard user={(user._id===currentUser._id)?currentUser:user} editClickHandler={editClickHandler}/>}
            {!editClick && (
              <div className="flex ml-2 pl-2 flex-col w-full ">
                <div className="flex flex-row w-full justify-between pb-1.5 border-b border-gray-300">
                  {radio ? (
                    <div className="text-gray-600 text-lg font-bold mt-1.5">
                      Top Questions
                    </div>
                  ) : (
                    <div className="text-gray-600 text-lg font-bold mt-1.5">
                      Top Answers
                    </div>
                  )}
                  <div className="flex flex-row">
                    <button
                      onClick={() => radioChangeHandler("question")}
                      className={`flex items-center p-2 ${
                        radio ? "bg-gray-200" : "bg-white"
                      } h-10 rounded rounded-r-none border border-gray-400  text-gray-600`}
                    >
                      Questions
                    </button>
                    <button
                      onClick={() => radioChangeHandler("answer")}
                      className={`flex items-center p-2 ${
                        !radio ? "bg-gray-200" : "bg-white"
                      } border rounded rounded-l-none border-l-0 border-gray-400  text-gray-600 h-10`}
                    >
                      Answers
                    </button>
                  </div>
                </div>
                <div>
                  {radio &&
                    user.questions.map((question) => (
                      <QuestionItem question={question} />
                    ))}
                  {!radio &&
                    user.answers.map((answer) => (
                      <AnswerItem answer={answer} />
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileScreen;
