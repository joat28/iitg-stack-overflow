import React from "react";
import TopSevenTags from "./TopSevenTags";
import SideBarWidget from "./SideBarWidget";

const RightSideBar = () => {
  return (
    <div className="flex flex-col w-1/3 mt-16 ">
      <SideBarWidget />
      <TopSevenTags />
    </div>
  );
};

export default RightSideBar;
