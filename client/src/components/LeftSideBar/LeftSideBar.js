import React from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/svg/Globe";

const LeftSideBar = () => {
  return (
    <div className="w-44 h-screen border-gray-300 border-r ">
      <div className="float-right mt-24">
        <NavLink exact to="/" className="text-gray-500 ">
          <p className="text-sm">Home</p>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSideBar;
