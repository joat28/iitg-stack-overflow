const axios = require("axios");

const { BASE_API_URI } = require("../constants/index");

const API = axios.create({
  baseURL: BASE_API_URI,
});

axios.defaults.headers.common = {
  authorization: `Bearer ${localStorage.getItem("token")}`,
};

//======== AUTH =========
//Sign up
export const createUser = (User) => API.post("/register", User);

//Load User
export const loadUserCall = (token) => API.get("/auth");

//Login
export const checkUser = (User) => API.post("/login", User);

//Logout
export const clearToken = () => API.delete("/logout");

//        ====== QUESTIONS ======;
//AllQuestions
export const getQuestions = () => API.get("/question");

// GET Single Question by ID
export const getQuestion = () => API.get("/question/id");

//Create Question
export const createQuestion = (Question) => API.post("/question/ask", Question);
