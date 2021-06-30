import { SET_QUESTIONS } from "./questions.types";

export const getQuestionAction = (questions) => (dispatch) => {
  console.log(questions);
  dispatch({
    type: SET_QUESTIONS,
    payload: questions,
  });
};
