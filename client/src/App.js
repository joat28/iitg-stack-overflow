import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/AuthCard/Card";
// import Intro from "./components/AuthCard/Intro";

import RegisterScreen from "./screens/Register/RegisterScreen";
import LoginScreen from "./screens/Login/LoginScreen";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/register" exact component={RegisterScreen} />
				<Route path="/login" exact component={LoginScreen} />

				{/* <Navbar />
				<Card type="Log in" className="m-30 " />
				<Intro />
				Setup */}
			</BrowserRouter>
		</div>
	);
}

export default App;
