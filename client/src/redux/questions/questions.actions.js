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
import {
  getQuestions,
  getQuestion,
  getQuestionsTags,
  getTopQuestions,
} from "../../api/index";

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

// GET TOP questions
export const getTopQuestionsAction = () => (dispatch) => {
  // console.log(questions);
  dispatch({
    type: GET_QUESTION_REQUEST,
  });
  getTopQuestions()
    .then((res) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data.data,
      });
    })
    .catch();
};

// Get all questions by tags array
export const getQuestionsByTags = (tags, pathname) => (dispatch) => {
  // console.log("tagsArray in actions is ", tags);
  const Tags = { tags };
  if (pathname === "/") pathname = "top";
  else if (pathname === "/questions") pathname = "all";
  getQuestionsTags(Tags, pathname)
    .then((res) => {
      // console.log("response in getQuestions ", res);
      dispatch({
        type: GET_QUESTION_BY_TAGS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      console.log("error here");
      return console.log(error);
    });
};
// Get single question by id

export const getQuestionAction =
  (question_id, history, voteChange) => (dispatch) => {
    // console.log(questions);
    if (!voteChange) {
      dispatch({
        type: GET_QUESTION_REQUEST,
      });
    }
    getQuestion(question_id)
      .then((res) => {
        dispatch({
          type: GET_QUESTION,
          payload: res.data.data,
        });
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

export const questionDeleteAction = (id, history) => async (dispatch) => {
  deleteQuestion(id)
    .then((res) => {
      dispatch({
        type: DELETE_QUESTION,
      });
      dispatch(
        setAlert({
          message: "Question deleted!",
          status: true,
        })
      );
    })
    .catch((error) => {
      console.log(error);
      return;
    });
  history.push("/");
};
