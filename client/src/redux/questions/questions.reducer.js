import { GET_QUESTIONS,GET_QUESTION,CREATE_QUESTION,GET_QUESTION_REQUEST } from "./questions.types";

const initialState = {
	questions: null,
	question: null,
	loading: true,
	error: null,
};

export const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_QUESTION_REQUEST:
			return {
				...state,
				loading: true
			}
		case GET_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
				loading: false
			};
		case CREATE_QUESTION:
		    return {
		        ...state,
				loading: false
			};
		case GET_QUESTION:
			return {
				...state,
				question: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
