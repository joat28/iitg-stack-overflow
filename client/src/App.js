import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/AuthCard/Card";
import Intro from "./components/AuthCard/Intro";
	

function App() {
	return (
		<div className="App">
			<Navbar />			
			<Card type="Log in" className="m-30 " />
			<Intro />
			Setup

		</div>
	);
}

export default App;
