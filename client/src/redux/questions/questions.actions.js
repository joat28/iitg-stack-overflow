import {
  GET_QUESTIONS,
  CREATE_QUESTION,
  GET_QUESTION,
  GET_QUESTION_REQUEST,
  DELETE_QUESTION,
  GET_QUESTION_BY_TAGS,
} from "./questions.types";
import { createQuestion, deleteQuestion } from "../../api/index";
import { setAlert } from "../alert/alert.actions";
import { getQuestions, getQuestion, getQuestionsTags } from "../../api/index";

// GET all questions
export const getQuestionsAction = () => (dispatch) => {
  // console.log(questions);
  dispatch({
    type: GET_QUESTION_REQUEST,
  });
  getQuestions()
    .then((res) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data.data,
      });
    })
    .catch();
};

// Get all questions by tags array
export const getQuestionsByTags = (tags) => (dispatch) => {
  // console.log("tagsArray in actions is ", tags);
  const Tags = { tags };
  getQuestionsTags(Tags)
    .then((res) => {
      console.log("response in getQuestions ", res);
      dispatch({
        type: GET_QUESTION_BY_TAGS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      return console.log(error);
    });
};
// Get single question by id

export const getQuestionAction =
  (question_id, history, changeVotes) => (dispatch) => {
    // console.log(questions);
    dispatch({
      type: GET_QUESTION_REQUEST,
    });
    getQuestion(question_id)
      .then((res) => {
        dispatch({
          type: GET_QUESTION,
          payload: res.data.data,
        });
        changeVotes(
          res.data.data.upvotes.length - res.data.data.downvotes.length
        );
      })
      .catch((error) => {
        history.push("/notfound");
      });
  };

// CREATE a single question
export const createQuestionAction = (question, history) => async (dispatch) => {
  createQuestion(question)
    .then((res) => {
      //console.log(res);
      dispatch({
        type: CREATE_QUESTION,
        payload: question,
      });
      // dispatch(getQuestionsAction());
      dispatch(
        setAlert({
          message: "Question Posted !",
          status: true,
        })
      );
      //TODO: redirect to the particular question later
      // console.log(res.data);
      // console.log('string is ',`/question/${res.data._id}`)
      history.push(`/question/${res.data.newQuestion._id}`);
    })
    .catch((error) =>
      dispatch(
        setAlert({
          message: error.message,
          status: false,
        })
      )
    );
};

export const removeQuestion = (id, history) => async (dispatch) => {
  try {
    const res = await deleteQuestion(id);

    dispatch({
      type: DELETE_QUESTION,
    });

    dispatch(
      setAlert({
        message: "Question deleted successfully",
        status: true,
      })
    );
    history.push("/");
  } catch (err) {
    dispatch(setAlert(err.response.data.message, "danger"));
  }
};
