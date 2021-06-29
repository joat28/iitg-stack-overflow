import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";
import QuestionDisplay from "../../components/Question/QuestionDisplay";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Alert />
      <div className="bg-white flex flex-row">
        <LeftSideBar />
        
        <QuestionDisplay />
        
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
