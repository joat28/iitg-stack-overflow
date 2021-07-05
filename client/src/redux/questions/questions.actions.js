import { GET_QUESTIONS, CREATE_QUESTION, GET_QUESTION,GET_QUESTION_REQUEST, DELETE_QUESTION } from "./questions.types";
import { createQuestion, deleteQuestion } from "../../api/index";
import { setAlert } from "../alert/alert.actions";
import { getQuestions, getQuestion } from "../../api/index";

// GET all questions
export const getQuestionsAction = () => (dispatch) => {
  // console.log(questions);
  getQuestions().then(res => {
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.data,
    });
  }).catch()
};

// Get single question by id

export const getQuestionAction = (question_id) => (dispatch) => {
  // console.log(questions);
  dispatch({
    type: GET_QUESTION_REQUEST
  })
  getQuestion(question_id).then(res => {
    dispatch({
      type: GET_QUESTION,
      payload: res.data.data,
    });
  }).catch()
};

// CREATE a single question
export const createQuestionAction = (question, history) => async (dispatch) => {
  createQuestion(question)
      .then((res) => {
        //console.log(res);
        dispatch({
          type: CREATE_QUESTION,
          payload: question
        })
        // dispatch(getQuestionsAction());
        dispatch(setAlert({
          message: "Question Posted !",
          status: true,
        }));
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

}

export const removeQuestion = (id, history) => async (dispatch) => {
  try {
    const res = await deleteQuestion(id);

    dispatch({
      type: DELETE_QUESTION,
    });
    
    dispatch(setAlert({
      message: 'Question deleted successfully',
      status: true
    }));
    history.push('/');
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};
