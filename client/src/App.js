import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import UsersScreen from "./screens/Users/UsersScreen";
import { getQuestions } from "./api/index";
import { getQuestionAction } from "./redux/questions/questions.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setLoadingAction,
  stopLoadingAction,
} from "./redux/loading/loading.actions";
// import {useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingAction());
    getQuestions()
      .then((res) => dispatch(getQuestionAction(res.data.data)))
      .then(() => dispatch(stopLoadingAction()));
    console.log("Sent get request");
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/questions" exact component={HomeScreen} />
        <Route path="/tags" exact component={HomeScreen} />
        <Route path="/users" exact component={HomeScreen} />
        {/* <Route path="/questions" exact component={QuestionsScreen} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
