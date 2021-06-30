import React from "react";
import Pencil from "../../assets/svg/Pencil";
import Meta from "../../assets/svg/Meta";

const SideBarWidget = () => {
  return (
    <div className="bg-yellow-50 h-64 rounded mt-6 border border-yellow-200 shadow-md">
      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-yellow-100 rounded-t-md border border-yellow-200 flex items-center">
        The Overflow Blog
      </div>
      <div className="h-24 flex flex-col pl-1 pr-1 md-3 justify-evenly">
        <div className="flex">
          <Pencil />
          <a href="/" className="text-sm inline-block text-left">
            Using collections to make your SQL
          </a>
        </div>
        <div className="flex">
          <Pencil />
          <a href="/" className="text-sm inline-block text-left">
            How Stack Overflow has evolved
          </a>
        </div>
      </div>

      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-yellow-100 border border-yellow-200 flex items-center">
        Featured on Meta
      </div>
      <div className="flex pt-2 flex-col items-center justify-center ">
        <div className="ml-4 flex ">
          <Meta />
          <a href="/" className="text-sm inline-block text-left">
            Beta release of Collectives™ on Stack Overflow
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarWidget;
