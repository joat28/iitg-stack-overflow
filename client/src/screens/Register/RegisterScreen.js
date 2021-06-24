import React from "react";
import Card from "../../components/AuthCard/Card";
import Intro from "../../components/AuthCard/Intro";
import Navbar from "../../components/Navbar/Navbar";

const RegisterScreen = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div class="flex flex-row h- justify-center items-center mt-4/5 ">
				<Intro />
				<Card type="Sign up" />
			</div>
		</React.Fragment>
	);
};
export default RegisterScreen;
