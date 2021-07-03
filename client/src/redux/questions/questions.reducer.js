import {
	GET_QUESTIONS,
	GET_QUESTION,
	GET_TOP_QUESTIONS,
	GET_TAG_QUESTIONS,
	DELETE_QUESTION,
	ADD_QUESTION,
} from "./questions.types";

const initialState = {
	questions: [],
	question: {},
};

export const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_QUESTION:
			return {
				...state,
				question: action.payload
			}
		case GET_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
			};
		case GET_QUESTION:
			return {
				...state,
				question: action.payload,
			};
		case GET_TOP_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
			};
		case GET_TAG_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
			};
		case DELETE_QUESTION:
			return {
				...state,
				questions: state.questions.filter(
					(question) => question.id !== action.payload
				),
				question: null,
			};
		default:
			return state;
	}
};
