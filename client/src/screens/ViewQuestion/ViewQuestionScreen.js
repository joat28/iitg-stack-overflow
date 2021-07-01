import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
// import QuestionDisplay from "../../components/Question/QuestionDisplay";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getQuestion } from "../../api/index";

const ViewQuestionScreen = (props) => {
  const [post,setPost] = useState('');
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.split("/")[2];
    console.log(id);
    getQuestion(id)
      .then((res) => {
        setPost(res.data.payload);
        // return console.log(post);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-row">
        <Alert />
        <LeftSideBar />
        <div className="mt-96"> {post.title} </div> <RightSideBar />
      </div>
    </React.Fragment>
  );
};
export default ViewQuestionScreen;
