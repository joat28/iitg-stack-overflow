import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "../../redux/alert/alert.actions";
import Alert from "../Alert/Alert";
import { useHistory } from "react-router-dom";
import { createQuestionAction } from "../../redux/questions/questions.actions";

const QuestionCard = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();

  const clickHandler = (event) => {
    event.preventDefault();
    const tagsArray = tags
      .trim()
      .split(" ")
      .map((tag) => tag.toLowerCase());
    if (
      tags.trim() === "" ||
      description.trim() === "" ||
      title.trim() === ""
    ) {
      dispatch(
        setAlert({
          message: "All fields are required.",
          status: false,
        })
      );
      return;
    } else {
      const newPost = { title, description, tags: tagsArray, author: user._id };
      // console.log(newPost);
      dispatch(createQuestionAction(newPost, history));
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeBody = (event) => {
    setDescription(event.target.value);
  };
  const onChangeTags = (event) => {
    setTags(event.target.value);
  };

  return (
    <div className="w-4/6 h-screen">
      <Alert />
      <div className="bg-white w-full rounded shadow-md border border-gray-300">
        <form className="flex flex-col p-4">
          <label className="text-left ml-2 font-medium">Title</label>
          <label className="text-left text-xs ml-2">
            Be specific and imagine you're asking the question to another person
          </label>
          <div className="mx-2">
            <input
              onChange={onChangeTitle}
              type="text"
              placeholder="eg. is there an R function for finding the index of an element in a vector ?"
              className="placeholder-gray-400 w-full h-8 border mt-1  border-gray-300 p-3 text-sm rounded focus:border-blue-300 outline-none"
            />
          </div>
          <label className="text-left ml-2 mt-3 font-medium ">Body</label>
          <label className="text-left text-xs ml-2">
            Include all the information someone would need to answer your
            question
          </label>
          <div className="mx-2">
            <textarea
              onChange={onChangeBody}
              type="text"
              className="placeholder-gray-400  w-full h-64 border text-sm mt-1 border-gray-300 p-3 rounded focus:border-blue-300 outline-none"
            />
          </div>
          <label className="text-left ml-2 mt-3 font-medium ">Tags</label>
          <div className="mx-2">
            <input
              onChange={onChangeTags}
              type="text"
              placeholder="eg. css html javascript"
              className="placeholder-gray-400 w-full h-8 border mt-1 border-gray-300 p-3 text-sm rounded focus:border-blue-300 outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className=" flex items-center p-2 m-1 mt-3 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
              type="submit"
              onClick={clickHandler}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionCard;
