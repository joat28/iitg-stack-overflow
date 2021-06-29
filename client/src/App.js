import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/AuthCard/Card";
// import Intro from "./components/AuthCard/Intro";
import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import UsersScreen from "./screens/Users/UsersScreen";
import { getQuestions } from './api/index'
import { getQuestionAction } from "./redux/questions/questions.actions";
import {connect} from 'react-redux'

class App extends React.Component {
	componentWillMount() {
		this.getAllQuestions();
	}
	getAllQuestions() {
		getQuestions().then(res => {
			this.props.setQuestions(res.data.data)
		})
	}
	render() {
		return (
			<div className="App">	
				<BrowserRouter>
					<Navbar />
					<Route path="/register" exact component={RegisterScreen} />
					<Route path="/login" exact component={LoginScreen} />
					<Route path="/" exact component={HomeScreen} />
					<Route path="/users" exact component={UsersScreen} />
					{/* <Route path="/questions" exact component={QuestionsScreen} /> */}
				</BrowserRouter>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  setQuestions : (questions) => dispatch({ type: "SET_QUESTIONS", payload: questions }),
	}
}

export default connect(null, mapDispatchToProps)(App);
