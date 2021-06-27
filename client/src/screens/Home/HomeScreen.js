import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className=" flex flex-row">
        <div className="w-28 h-screen "></div>
        <LeftSideBar />
      </div>
    </React.Fragment>
  );
};
export default HomeScreen;
