import {
	GET_QUESTIONS,
	GET_QUESTION,
	GET_TOP_QUESTIONS,
	GET_TAG_QUESTIONS,
	SET_LOADING_QUESTION,
	DELETE_QUESTION,
	ADD_QUESTION,
} from "./questions.types";

const initialState = {
	questions: [],
	question: {},
	loading: true
};

export const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_QUESTION:
			return {
				...state,
				loading: true
			}
		case ADD_QUESTION:
			return {
				...state,
				question: action.payload,
				loading: false
			}
		case GET_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
				loading: false
			};
		case GET_QUESTION:
			return {
				...state,
				question: action.payload,
				loading: false
			};
		case GET_TOP_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
				loading: false
			};
		case GET_TAG_QUESTIONS:
			return {
				...state,
				questions: [...action.payload],
				loading: false
			};
		case DELETE_QUESTION:
			return {
				...state,
				questions: state.questions.filter(
					(question) => question.id !== action.payload
				),
				question: null,
				loading: false
			};
		default:
			return state;
	}
};
