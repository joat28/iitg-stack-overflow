const axios = require("axios");

const { BASE_API_URI } = require("../constants/index");

export const API = axios.create({
  baseURL: BASE_API_URI,
});

API.defaults.headers.common = {
  authorization: `Bearer ${localStorage.getItem("token")}`,
};

//======== AUTH =========
//Sign up
export const createUser = (User) => API.post("/register", User);

//Load User
export const loadUserCall = () => API.get("/auth");

//Login
export const checkUser = (User) => API.post("/login", User);

//Logout
export const clearToken = () => API.delete("/logout");

//====== QUESTIONS ======;
//AllQuestions
export const getQuestions = () => API.get("/question");

// GET Single Question by ID
export const getQuestion = (id) => {
  return API.get('/question/'+id)
};

//Create Question
export const createQuestion = (Question) => API.post("/question/ask", Question);

//Update one Question by Id
export const updateQuestion = (Question, id) => API.put("/question/"+id, Question);

//Update one Question by Id
// export const updateAnswer = (Answer, id) => API.put("/question/"+id, Question);

//Answer a Question and get all answers: Answer & Question ID passed
export const answerQuestion = (Answer, id) => API.post('/answer/' + id, Answer);

//Get all the answers, if you did not submit answer
export const getAllAnswers = (questionId) => API.get('/question/answers', questionId);

// Answers


// Comments
