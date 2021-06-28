import React from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/svg/Globe";

const LeftSideBar = () => {
  return (
    <div className="w-72 h-screen border-gray-300 border-r text-left pl-32 pt-24">
        <NavLink exact to="/"  className="text-gray-500" activeClassName="text-orange-600 border-red-400 border-r-4">
          <h1 className="text-sm pb-4 ">Home</h1>
        </NavLink>
        <h1 className="text-xs text-gray-400 pb-2 font-semibold">PUBLIC</h1>
        <NavLink exact to="/questions" className="text-gray-500" activeClassName="text-orange-600 border-red-400 border-r-4">
          <Globe/>
          <h3 className="text-sm py-2  pl-1 inline-block">Questions</h3>
        </NavLink>
        <div className="pl-6 "activeClassName="text-red-600 border-orange-600 border-r-2">
        <NavLink exact to="/tags" className="text-gray-500 ">
          <h3 className="text-sm py-2">Tags</h3>
        </NavLink>
        <NavLink exact to="/users" className="text-gray-500 " activeClassName="text-orange-600  border-red-400 border-r-4">
          <h3 className="text-sm py-2">Users</h3>
        </NavLink>
        </div>

    </div>
  );
};

export default LeftSideBar;
