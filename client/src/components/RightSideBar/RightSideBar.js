import React from "react";
import TopSevenTags from "./TopSevenTags";
import SideBarWidget from "./SideBarWidget";
import WatchedTags from "./WatchedTags";

const RightSideBar = (props) => {
  return (
    <div className="flex flex-col w-1/3 ml-10 mr-10 mt-16 ">
      <SideBarWidget />
      <WatchedTags getTags={props.getTags} />
      <TopSevenTags />
    </div>
  );
};

export default RightSideBar;
