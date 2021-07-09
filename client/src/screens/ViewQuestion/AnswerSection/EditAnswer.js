import React, { useState } from "react";
import { setAlert } from "../../../redux/alert/alert.actions";
import { useDispatch } from "react-redux";
import { updateAnswer } from "../../../api/index";

export const EditAnswer = (props) => {
  const answer = props.answer;
  const [description, setDescription] = useState(answer.description);
  const dispatch = useDispatch();

  const onChangeBody = (event) => {
    setDescription(event.target.value);
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    if (description.trim() === "") {
      return dispatch(
        setAlert({
          message: "Answer cannot be empty",
          status: false,
        })
      );
    }
    updateAnswer(
      {
        description,
      },
      answer._id
    )
      .then((res) => {
        console.log("Answer edited!");
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
    <div>
      <textarea
        onChange={onChangeBody}
        type="text"
        value={description}
        className="border-2 border-gray-300 rounded mr-4 mb-30 h-56 p-2 w-11/12 focus:border-blue-300 outline-none"
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
