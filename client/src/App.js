import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/AuthCard/Card";
// import Intro from "./components/AuthCard/Intro";

import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import HomeScreen from "./screens/Home/HomeScreen";

function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Route path="/register" exact component={RegisterScreen} />
				<Route path="/login" exact component={LoginScreen} />
				<ProtectedRoute path="/" exact component={HomeScreen} />


			</BrowserRouter>
		</div>
	);
}

export default App;
