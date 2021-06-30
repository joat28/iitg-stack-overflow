import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import QuestionDisplay from "../../components/Question/QuestionDisplay";
import RightSideBar from '../../components/RightSideBar/RightSideBar'

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Alert />
      <div className="bg-white flex flex-row">
        <LeftSideBar />
        <QuestionDisplay />
        <RightSideBar />
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
