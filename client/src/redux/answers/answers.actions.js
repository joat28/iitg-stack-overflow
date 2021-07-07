import { GET_ANSWERS, ADD_ANSWER, GET_ANSWERS_REQUEST } from "./answers.types";
import { getAllAnswers } from "../../api/index";
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

// Add Answer
// export const addAnswer = (postId, formData) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const res = await axios.post(
//       `/api/posts/answers/${postId}`,
//       formData,
//       config
//     );

//     dispatch({
//       type: ADD_ANSWER,
//       payload: res.data.data,
//     });

//     dispatch(setAlert(res.data.message, "success"));

//     dispatch(getAnswers(postId));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, "danger"));

//     dispatch({
//       type: ANSWER_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

// Delete Answer
//   export const deleteAnswer = (AnswerId) => async (dispatch) => {
//     try {
//       const res = await axios.delete(`/api/posts/answers/${AnswerId}`);

//       dispatch({
//         type: DELETE_ANSWER,
//         payload: AnswerId,
//       });

//       dispatch(setAlert(res.data.message, 'success'));
//     } catch (err) {
//       dispatch(setAlert(err.response.data.message, 'danger'));

//       dispatch({
//         type: ANSWER_ERROR,
//         payload: {msg: err.response.statusText, status: err.response.status},
//       });
//     }
//   };
