import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Card = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	function clickHandler(event) {
		console.log(email, password, name);
		if (props.type === "Log in") console.log("Log in");
		else console.log("Sign Up");
	}

	const nameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
	};

	const location = useLocation();
	// console.log(location.pathname);
	const well = {
		boxShadow:
			"0 10px 25px rgb(0,0,0,5%), 0 20px 48px rgb(0,0,0,5%), 0 1px 4px rgb(0,0,0,10%)",
	};
	return (
		<div
			className="flex flex-col rounded w-96 px-5 bg-white py-10 m-10"
			style={well}
		>
			{location.pathname === "/register" && (
				<label
					for="displayName"
					className="text-left ml-2 mt-1 font-medium font-sans BlinkMacSystemFont"
				>
					Display name
				</label>
			)}
			{location.pathname === "/register" && (
				<input
					id="displayName"
					type="text"
					value={name}
					required
					className="p-2 m-2 mt-1 rounded border-2 focus:border-blue-300 outline-none"
					onChange={nameChangeHandler}
				/>
			)}
			<label
				for="email"
				className="text-left ml-2 mt-1 font-medium font-sans BlinkMacSystemFont"
			>
				Email
			</label>
			<input
				id="email"
				type="text"
				required
				className="p-2 m-2 mt-1 rounded border-2 focus:border-blue-300 outline-none"
				onChange={emailChangeHandler}
			/>
			<label for="password" className="text-left ml-2 mt-4 font-medium">
				Password
			</label>
			<input
				type="password"
				required
				className="p-2 m-2 mt-1 rounded border-2 focus:border-blue-300 outline-none"
				onChange={passwordChangeHandler}
			/>
			<button
				onClick={clickHandler}
				type="submit"
				className="p-2 m-1 bg-blue-500 rounded text-white hover:bg-blue-600 h-10 hover:bg-blue-600 mt-4"
			>
				{props.type}
			</button>
		</div>
	);
};

export default Card;
