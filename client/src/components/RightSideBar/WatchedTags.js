import React from "react";
import { useState, useEffect } from "react";
import TagSearch from "../../assets/svg/TagSearch";
import { getQuestionsByTags } from "../../redux/questions/questions.actions";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
const WatchedTags = (props) => {
  const [tags, setTags] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [watchClick, setWatchClick] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const watchClickHandler = () => {
    setWatchClick(true);
  };
  const tagsChangeHandler = (event) => {
    setTags(event.target.value);
  };

  const removeTagHandler = (deletedTag) => {
    setSelectedTags((selectedTags) => {
      return [...selectedTags.filter((tag) => tag !== deletedTag)];
    });
  };

  const addClickHandler = () => {
    const newTags = tags.trim().split(" ");
    setSelectedTags((selectedTags) => [
      ...new Set(selectedTags.concat(newTags)),
    ]);
    setTags("");
  };

  useEffect(() => {
    dispatch(getQuestionsByTags(selectedTags.join(" "),location.pathname));
  }, [selectedTags, dispatch, location.pathname]);

  return (
    <div className="mt-3 rounded-md shadow-md border border-gray-300">
      <div className="h-11 pl-4 text-gray-600 text-sm font-semibold bg-gray-100 border-b border-gray-300  rounded-t-md  flex items-center text-md">
        Watched Tags
      </div>
      {watchClick ? (
        <div className=" flex flex-col p-2 items-center text-center justify-evenly rounded ">
          <div className="flex-wrap flex pl-1 ">
            {selectedTags.map((tag, index) => (
              <>
                {tag !== "" && (
                  <div
                    key={index}
                    className="m-1 text-xs px-0.5 py-0.5 bg-blue-100 border-2 border-blue-100 hover:bg-blue-200 text-blue-600 my-1.5  rounded "
                  >
                    <div className="flex flex-row justify-between ">
                      <div className="pr-1">{tag}</div>
                      <div>
                        <img
                          onClick={() => {
                            removeTagHandler(tag);
                          }}
                          className="h-4 w-4 hover: cursor-pointer"
                          src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EDelete Circle%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Ccircle data-name='layer1' cx='32' cy='32' r='30' fill='%23f66'%3E%3C/circle%3E%3Cpath data-name='opacity' d='M36 58A30 30 0 0 1 12.882 8.881 30 30 0 1 0 55.118 51.12 29.882 29.882 0 0 1 36 58z' fill='%23000028' opacity='.15'%3E%3C/path%3E%3Ccircle data-name='stroke' cx='32.001' cy='32' r='30' transform='rotate(-45 32.001 32)' fill='none' stroke='%23f5f7fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='stroke' fill='none' stroke='%23f5f7fa' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M42.999 21.001l-22 22m22 0L21 21'%3E%3C/path%3E%3C/svg%3E"
                          alt="Delete"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <input
            type="text"
            onChange={tagsChangeHandler}
            value={tags}
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
