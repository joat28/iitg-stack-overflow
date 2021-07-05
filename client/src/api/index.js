const axios = require("axios");

const { BASE_API_URI } = require("../constants/index");

const API = axios.create({
  baseURL: BASE_API_URI,
});

API.defaults.headers.common = {
  authorization: `Bearer ${localStorage.token}`,
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
export const updateQuestion = (Question, id) => API.patch("/question/" + id, Question);

export const deleteQuestion = (id) => API.delete("/question/" + id);

//Update one Question by Id
// export const updateAnswer = (Answer, id) => API.put("/question/"+id, Question);

//Answer a Question: Answer & Question ID passed
export const answerQuestion = (Answer, question_id) => API.post('/question/answers/' + question_id, Answer);

//Get all the answers
export const getAllAnswers = (questionId) => API.get('/question/answers/'+questionId);


