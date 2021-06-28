import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Alert from "../../components/Alert/Alert";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Alert />
      <div className="bg-white">
        <div className=" flex flex-row">
          <LeftSideBar />
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
