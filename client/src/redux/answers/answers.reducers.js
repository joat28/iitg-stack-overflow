import { GET_ANSWERS, ADD_ANSWER, GET_ANSWERS_REQUEST } from "./answers.types";

const initialState = {
  answers: [],
  loading: true,
};

export default function (state = initialState, action) {
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
    //   case DELETE_ANSWER:
    //     return {
    //       ...state,
    //       answers: state.answers.filter((answer) => answer.id !== action.payload),
    //       loading: false,
    //     };

    default:
      return state;
  }
}
