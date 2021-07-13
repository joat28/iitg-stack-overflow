import React from "react";
import "./App.css";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//SCREENS
import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import PostQuestionScreen from "./screens/PostQuestion/PostQuestion";
import ViewQuestionScreen from "./screens/ViewQuestion/ViewQuestionScreen";
import NotFoundScreen from "./screens/NotFoundScreen"
import AllQuestionsScreen from "./screens/AllQuestions/AllQuestionsScreen";
import UsersScreen from "./screens/Users/UsersScreen";
import UserProfileScreen from "./screens/UserProfile/UserProfileScreen"
import SearchBarScreen from "./screens/SearchBar/SearchBarScreen";

//HOOKS
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//FUNCTIONS | ACTIONS | 
import { loadUser } from "./redux/auth/auth.actions";
import TeamScreen from "./screens/TeamScreen/TeamScreen";
// import { getQuestions } from "./api/index";
// import { getQuestionAction } from "./redux/questions/questions.actions";
// import {
//   setLoadingAction,
//   stopLoadingAction,
// } from "./redux/loading/loading.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>   {
    // dispatch(setLoadingAction());
    dispatch(loadUser());
    // console.log("Sent get request");
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/" exact component={HomeScreen} />
        <Route path="/questions" exact component={AllQuestionsScreen} />
        <Route path="/question/ask" exact component={PostQuestionScreen} />
        <Route path="/question/:id" exact component={ViewQuestionScreen}/>
        <Route path="/users" exact component={UsersScreen} />
        <Route path="/users/:user_id" exact component={UserProfileScreen} />
        <Route path="/search/:search_id" exact component={SearchBarScreen} />
        <Route path="/team" exact component={TeamScreen} />
        <Route path="*" component={NotFoundScreen}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
