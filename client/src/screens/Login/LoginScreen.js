import React from "react";
import Card from "../../components/AuthCard/Card";
import Navbar from "../../components/Navbar/Navbar";
const LoginScreen = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Card type="Log in" />
		</React.Fragment>
	);
};

export default LoginScreen;
