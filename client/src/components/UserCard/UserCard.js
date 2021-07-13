import React from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const UserCard = (props) => {
  const user = props.user;
  
  return (
      <div className="flex flex-row m-2 w-52 ml-5 mb-4">
        <img
          className="w-16 h-16 border border-gray-300"
          src={`https://avatars.dicebear.com/api/jdenticon/${user.name}.svg`}
          alt = "profile"
        ></img>
        <div className="flex flex-col text-xs  ml-3">
          <Link to={`/users/${user._id}`} className="text-left text-sm text-blue-600 hover:text-blue-400">
            {user.name}
          </Link>
          <span className="text-gray-500">
                  created {moment(user.createdAt).fromNow()}
            </span>
            <span className="text-gray-500">{user.questions.length} {user.questions.length===1?<span >Question</span>:<span > Questions </span>} </span>
            <span className="text-gray-500">{user.answers.length} {user.answers.length===1?<span >Answer</span>:<span >Answers</span>}</span>
        </div>
      </div>
  );
};

export default UserCard;
