import React from "react";
import { useState } from "react";
import TagSearch from "../../assets/svg/TagSearch";

const WatchedTags = (props) => {
  const [tags, setTags] = useState("");
  const [watchClick, setWatchClick] = useState(false);

  const watchClickHandler = () => {
    setWatchClick(true);
  };
  const tagsChangeHandler = (event) => {
    setTags(event.target.value);
  };
  const addClickHandler = () => {
    const tagsArray = tags.split(" ");
    props.getTags(tagsArray);
  };

  return (
    <div className="mt-3 rounded-md shadow-md border border-gray-300">
      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-300  rounded-t-md  flex items-center text-md">
        Watched Tags
      </div>
      {watchClick ? (
        <div className=" flex p-2 items-center text-center justify-evenly rounded ">
          <input
            type="text"
            onChange={tagsChangeHandler}
            placeholder="input tags with spaces"
            className="placeholder-gray-500 w-full h-10 border-2 border-gray-200 text-sm p-3 rounded focus:border-blue-300 outline-none"
          />
          <button
            className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
            onClick={addClickHandler}
          >
            Add
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-5 ">
          <TagSearch />
          <div className="text-xs text-gray-400 mt-1">
            Watch tags to curate your list of questions.
          </div>
          <button
            className=" my-3 flex justify-center items-center p-2 w-32 m-1 bg-blue-200 border border-blue-600 rounded text-blue-700 hover:bg-blue-300"
            onClick={watchClickHandler}
          >
            <span className="text-sm">Watch a Tag</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchedTags;
