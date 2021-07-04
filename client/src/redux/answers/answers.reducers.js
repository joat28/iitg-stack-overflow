import {
    GET_ANSWERS,
    ADD_ANSWER,
    DELETE_ANSWER,
    SET_LOADING_ANSWERS
  } from './answers.types';
  
  const initialState = {
    answers: [],
    loading: true
  };
  
export const answersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_LOADING_ANSWERS:
          return {
            ...state,
            loading: true
          }
      case GET_ANSWERS:
        return {
          answers: action.payload,
          loading: false
        };
      case ADD_ANSWER:
        return {
          answers: [action.payload,...state.answers],
          loading: false
        };
      case DELETE_ANSWER:
        return {
          answers: state.answers.filter((answer) => answer.id !== action.payload),
          loading: false
        };
      default:
        return state;
    }
  }
  