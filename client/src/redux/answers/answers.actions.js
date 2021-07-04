import {
  GET_ANSWERS,
  ADD_ANSWER,
  DELETE_ANSWER,
  SET_LOADING_ANSWERS
} from './answers.types';
import axios from 'axios';
import {API} from "../../api/index"
import { setAlert } from "../alert/alert.actions";
import { stopLoadingAction } from "../loading/loading.actions";

export const getAnswers = (id) => async (dispatch) => {
  try {
    console.log("id: ", id);
    const res = await API.get('/question/answers/'+id);
    dispatch({
      type: GET_ANSWERS,
      payload: res.data.data,
    });
    // dispatch(stopLoadingAction());
    dispatch(setAlert({ message: "Answers fetched", status: true }));
} catch (err) {
    // dispatch(stopLoadingAction());
    dispatch(setAlert({message: "Unable to get all answers", status: false}))
  }
};

export const setLoadingAnswers = () => async (dispatch) => {
	dispatch({
		type: SET_LOADING_ANSWERS
	})
}

// Add Answer
// export const addAnswer = (postId, formData) => async (dispatch) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
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

//     dispatch(setAlert(res.data.message, 'success'));

//     dispatch(getAnswers(postId));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, 'danger'));
//   }
// };

// // Delete Answer
// export const deleteAnswer = (AnswerId) => async (dispatch) => {
//   try {
//     const res = await axios.delete(`/api/posts/answers/${AnswerId}`);

//     dispatch({
//       type: DELETE_ANSWER,
//       payload: AnswerId,
//     });

//     dispatch(setAlert(res.data.message, 'success'));
//   } catch (err) {
//     dispatch(setAlert(err.response.data.message, 'danger'));
//   }
// }; 