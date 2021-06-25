import React from "react";
import Card from "../../components/AuthCard/Card";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from '../../assets/svg/Overflow';

const LoginScreen = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div class="flex flex-col justify-center items-center h-screen">
			<a href="/">
            <Logo />
          </a>
				<Card type="Log in" />
				<span>
					Don’t have an account?
					<Link to="/register">
						<span className="text-blue-500"> Sign up</span>
					</Link>
				</span>
			</div>
		</React.Fragment>
	);
};

export default LoginScreen;
