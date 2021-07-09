import { GET_ANSWERS, ADD_ANSWER, GET_ANSWERS_REQUEST, DELETE_ANSWER } from "./answers.types";

const initialState = {
  answers: [],
  loading: true,
};

export const answerReducer =(state = initialState, action) => {
  switch (action.type) {
    case GET_ANSWERS_REQUEST:
      return {
        ...state,
        loadng: true,
      };
    case GET_ANSWERS:
      return {
        answers: [...action.payload],
        loading: false,
      };
    case ADD_ANSWER:
      return {
        ...state,
        loading: false,
      };
      case DELETE_ANSWER:
        return {
          answers: [...action.payload],
          loading: false,
        };

    default:
      return state;
  }
}
