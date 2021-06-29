import { SET_QUESTIONS } from "./questions.types";

const initialState = {
	questions: [],
	error: null,
};

export const questionReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_QUESTIONS:
			return {
				...state,
				questions: [...action.payload]
			};
		// case REMOVE_QUESTION:
		//     return {
		//         ...state,
		// 		questions: null,
		// 	};
		default:
			return state;
	}
};
