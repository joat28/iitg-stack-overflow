import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import QuestionDisplay from "../../components/Question/QuestionDisplay";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { useState } from "react";

const HomeScreen = () => {
  // let tagsArray = [];
  const [tagsArray, setTagsArray] = useState([]);
  const getTags = (tags) => {
    setTagsArray(tags);
  };
  return (
    <React.Fragment>
      <Alert />
      <LeftSideBar />
      <div className="bg-white flex flex-row pl-72">
        <QuestionDisplay tagsArray={tagsArray} />
        <RightSideBar getTags={getTags} />
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
