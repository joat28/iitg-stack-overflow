import { GET_ANSWERS, /*ADD_ANSWER,*/ GET_ANSWERS_REQUEST, DELETE_ANSWER } from "./answers.types";
import { getAllAnswers, deleteAnswer } from "../../api/index";
import { setAlert } from "../alert/alert.actions";

export const getAnswers = (question_id) => async (dispatch) => {
  dispatch({
    type: GET_ANSWERS_REQUEST,
  });
  getAllAnswers(question_id)
    .then((res) =>
      dispatch({
        type: GET_ANSWERS,
        payload: res.data.data,
      })
    )
    .catch((error) =>
      dispatch(
        setAlert({
          message: "Unable to fetch all Answers",
          status: false,
        })
      )
    );
};

// Delete Answer
  export const deleteAnswerAction = (answerId) => async (dispatch) => {
    try {
      // const res = await axios.delete(`/api/posts/answers/${AnswerId}`);
      deleteAnswer(answerId).then(res => {
        dispatch({
          type: DELETE_ANSWER,
          payload: res.data.data
        });
        dispatch(setAlert({
          message: res.data.message,
          status: true
        }));
      });

    } catch (err) {
      dispatch(setAlert({
        message:  err.response.message,
        status: false
      }));

      // dispatch({
      //   type: ANSWER_ERROR,
      //   payload: {msg: err.response.statusText, status: err.response.status},
      // });
    }
  };
