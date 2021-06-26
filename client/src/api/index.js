const axios = require("axios");

const { BASE_API_URI } = require("../constants/index");

const API = axios.create({
  baseURL: BASE_API_URI,
});

/*
SIGN UP : createUser()
LOGIN :   checkUser()
*/

//Sign up
export const createUser = (User) => API.post("/register", User);

//Login
export const checkUser = (User) => API.post("/login", User);

//Logout
export const clearToken = () => API.delete("/logout");


