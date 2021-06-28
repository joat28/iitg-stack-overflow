import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/AuthCard/Card";
// import Intro from "./components/AuthCard/Intro";
import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";
import TagsScreen from "./screens/Tags/TagsScreen";
import UsersScreen from "./screens/Users/UsersScreen";
import QuestionsScreen from "./screens/Questions/QuestionsScreen";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Route path="/register" exact component={RegisterScreen} />
				<Route path="/login" exact component={LoginScreen} />
				<Route path="/" exact component={HomeScreen} />
				<Route path="/tags" exact component={TagsScreen} />
				<Route path="/users" exact component={UsersScreen} />
				<Route path="/questions" exact component={QuestionsScreen} />
			</BrowserRouter>
		</div>
	);
}

export default App;
