import React from "react";
import Pencil from "../../assets/svg/Pencil";
import Npm from "../../assets/svg/Npm";
import {Link} from 'react-router-dom';

const SideBarWidget = () => {
  return (
    <div className="bg-yellow-50 h-64 rounded mt-6 border border-yellow-200 shadow-md">
      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-yellow-100 rounded-t-md border border-yellow-200 flex items-center">
        About IITG Stackoverflow
      </div>
      <div className="h-24 flex flex-col pl-1 pr-1 md-3 justify-evenly">
        <div className="flex">
          <Pencil />
          <a href ="https://github.com/joat28/iitg-stack-overflow" className="text-sm inline-block text-left">
            Source Code
          </a>
        </div>
        <div className="flex">
          <Pencil />
          <Link to ="/" className="text-sm inline-block text-left">
            The Team behind the scenes
          </Link>
        </div>
      </div>

      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-yellow-100 border border-yellow-200 flex items-center">
        Markdown
      </div>
      <div className="flex pt-2 flex-col items-center justify-center ">
        <div className="ml-4 flex ">
          <Npm />
          <a href ="https://www.npmjs.com/package/react-markdown" className="text-sm inline-block text-left">
            Using Markdown in React
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarWidget;
