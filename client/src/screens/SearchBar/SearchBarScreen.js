import React from "react";
import { useLocation } from "react-router-dom";
import SideBarWidget from "../../components/RightSideBar/SideBarWidget";
import SearchResults from "./SearchResults";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"

const SearchBarScreen = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const url = location.pathname.split("/")[2];

  return (
    <React.Fragment>
      <div className="min-h-screen bg-white">
        <LeftSideBar />
        <div className="bg-white flex flex-row pl-72">
          <SearchResults url={url} />
            <div className="mt-16 mr-10 ml-10 w-1/3">
          <SideBarWidget width={true}/>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SearchBarScreen;

