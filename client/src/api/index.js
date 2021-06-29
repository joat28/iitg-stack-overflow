const axios = require("axios");

const { BASE_API_URI } = require("../constants/index");

const API = axios.create({
  baseURL: BASE_API_URI,
});


//======== AUTH =========
//Sign up
export const createUser = (User) => API.post("/register", User);

//Login
export const checkUser = (User) => API.post("/login", User);

//Logout
export const clearToken = () => API.delete("/logout");

//====== QUESTIONS ======
//AllQuestions
export const getQuestions = () => API.get("/question")

// GET Single Question by ID
export const getQuestion = () => API.get("/question/id")

//Create Question
export const createQuestion = () => API.post("/question")

