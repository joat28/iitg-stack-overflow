import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../../../api/index";
import { setAlert } from "../../../redux/alert/alert.actions";

const EditQuestion = (props) => {
  const dispatch = useDispatch();

  const question = props.question;

  const [title, setTitle] = useState(question.title);
  const [description, setDescription] = useState(question.description);
  const [tags, setTags] = useState(question.tags.join(" "));
  // const user = useSelector((state) => state.auth.user)

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeBody = (event) => {
    setDescription(event.target.value);
  };
  const onChangeTags = (event) => {
    setTags(event.target.value);
  };
  const submitClickHandler = (event) => {
    event.preventDefault();
    if (
      tags.trim() === "" ||
      description.trim() === "" ||
      title.trim() === ""
    ) {
      return dispatch(
        setAlert({
          message: "All fields are required.",
          status: false,
        })
      );
    }
    let tt = tags.toLowerCase();
    updateQuestion({ title, description, tags:tt }, question._id)
      .then((res) => {
        dispatch(
          setAlert({
            message: res.data.message,
            status: true,
          })
        );
        return window.location.reload();
      })
      .catch((error) => dispatch(setAlert(error.message)));
  };

  return (
    <div className="p-2">
      <div className="text-left ml-2 font-medium">Title</div>
      <input
        onChange={onChangeTitle}
        type="text"
        value={title}
        className="w-full h-8 border mt-1 border-gray-600 p-3 text-sm rounded focus:border-blue-300 outline-none"
      />
      <div className="text-left ml-2 mt-3 font-medium ">Body</div>
      <textarea
        onChange={onChangeBody}
        type="text"
        value={description}
        className="w-full h-64 border text-sm mt-1 border-gray-600 p-3 rounded focus:border-blue-300 outline-none"
      />
      <div className="text-left ml-2 mt-3 font-medium ">Tags</div>
      <input
        onChange={onChangeTags}
        value={tags}
        type="text"
        className="w-full h-8 border mt-1 border-gray-600 p-3 text-sm rounded focus:border-blue-300 outline-none"
      />
      <div className="flex flex-row justify-around">
        <button
          onClick={(event) => {
            props.discardHandler(event);
          }}
        >
          <span className="flex items-center p-2 m-1 mt-3 bg-red-500 border-2 border-red-700 rounded text-white hover:bg-red-600 h-10">
            Discard Changes
          </span>
        </button>
        <button onClick={submitClickHandler}>
          <span className="flex items-center p-2 px-3 m-1 mt-3 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
            Save Changes
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditQuestion;
