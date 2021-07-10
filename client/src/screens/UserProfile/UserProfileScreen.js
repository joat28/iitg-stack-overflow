import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../api/index";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import moment from "moment";
import Spinner from "../../components/Spinner/Spinner";

const UserProfileScreen = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [radio, setRadio] = useState(true);

  useEffect(() => {
    console.log(location.pathname.split("/")[2]);
    getUser(location.pathname.split("/")[2])
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.pathname]);

  const radioChangeHandler = (type) => {
    if(type==='question' && radio)
      return;
    if(type==='answer' && !radio)
    return;
    setRadio((radio) => !radio);
  };

  return (
    <>
      <div className="bg-white min-h-screen w-full flex flex-row">
        <LeftSideBar />
        <div className="m-8 mt-20 w-full pl-72">
          {(!user || !user.name) && <Spinner />}
          {user && user.name && (
            <div className="flex w-full">
              <div
                className="flex flex-col px-6 p-6 pb-2 relative border border-gray-300 rounded w-60"
                style={{ boxShadow: "inset 0 8.5em 0 #eff0f1" }}
              >
                <img
                  className="w-40 h-40 block border border-gray-300 bg-white"
                  src={`https://avatars.dicebear.com/api/jdenticon/${user.name}.svg`}
                  alt="profile"
                ></img>
                <span className="text-gray-600 text-lg font-bold mt-0.5">
                  {user && user.name}
                </span>
                <div>
                  <span className="text-xs text-gray-500"> Joined: </span>
                  <span className="text-gray-600 text-md font-semibold">
                    {moment(user.createdAt).fromNow()}
                  </span>
                </div>
              </div>
              <div className="flex ml-2 pl-2 flex-col w-full ">
                <div className="flex flex-row w-full justify-between pb-1.5 border-b border-gray-300">
                  {radio ? (
                    <div className="text-gray-600 text-lg font-bold mt-1.5">
                      Questions
                    </div>
                  ) : (
                    <div className="text-gray-600 text-lg font-bold mt-1.5">
                      Answers
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
                  {radio && user.questions.map(question => <div>{question.title}</div>)}
                  {!radio && user.answers.map(answer => <div>{answer.description}</div>)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfileScreen;
