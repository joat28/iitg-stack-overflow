import {
	GET_QUESTIONS,
	GET_QUESTION,
	GET_TOP_QUESTIONS,
	GET_TAG_QUESTIONS,
	DELETE_QUESTION,
	ADD_QUESTION,
} from "./questions.types";
import axios from "axios";
import {API} from "../../api/index"
import { setAlert } from "../alert/alert.actions";
import { stopLoadingAction } from "../loading/loading.actions";

export const getQuestionsAction = () => async (dispatch) => {
  try {
    //TODO : put this in api folder
		const res = await API.get("/question");
		dispatch({
			type: GET_QUESTIONS,
			payload: res.data.data,
		});
		dispatch(stopLoadingAction());
	} catch (err) {
		dispatch(
			setAlert({
				message: "Failed to fetch questions",
				status: false,
			})
    );
    dispatch(stopLoadingAction());
	}
};

export const getQuestionAction = (id) => async (dispatch) => {
  try {
    //TODO : put this in api folder
		const res = await API.get("/question/" + id);
		dispatch({
			type: GET_QUESTION,
			payload: res.data.data,
    });
	} catch (err) {
		dispatch(
			setAlert({
				message: "Failed to load",
				status: false,
			})
		);
	}
  dispatch(stopLoadingAction());
};

export const getTopQuestions = () => async (dispatch) => {
	try {
		const res = await axios.get("/question/top");
		dispatch({
			type: GET_TOP_QUESTIONS,
			payload: res.data.data,
		});
	} catch (err) {
		dispatch(
			setAlert({
				message: "Failed to fetch Questions",
				status: false,
			})
		);
	}
};

export const getTagQuestions = (tagName) => async (dispatch) => {
	try {
		const res = await axios.get("/posts/tag/" + tagName);
		dispatch({
			type: GET_TAG_QUESTIONS,
			payload: res.data.data,
		});
	} catch (err) {
		dispatch(
			setAlert({
				message: "Failed to fetch Questions",
			})
		);
	}
};
