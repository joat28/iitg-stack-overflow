import React from "react";
import Card from "../../components/AuthCard/Card";
import Intro from "../../components/AuthCard/Intro";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Overflow";

const RegisterScreen = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div class="flex flex-row justify-center items-center h-screen">
				<Intro />
				<div className="flex flex-col justify-center items-center">
					<a href="/">
						<Logo />
					</a>
					<Card type="Sign up" />
					<span>
						Already have an account?
						<Link to="/login">
							<span className="text-blue-500"> Login</span>
						</Link>
					</span>
				</div>
			</div>
		</React.Fragment>
	);
};
export default RegisterScreen;
