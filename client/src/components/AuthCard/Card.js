import React from "react";

const Card = (props) => {
	var well = {
		boxShadow:
			"0 10px 25px rgb(0,0,0,5%), 0 20px 48px rgb(0,0,0,5%), 0 1px 4px rgb(0,0,0,10%)",
	};
	return (
		<div
			className="flex flex-col rounded w-96 px-5 bg-white py-10 m-10"
			style={well}
		>
			<label for="email" className="text-left ml-2 mt-1 font-medium">
				Email
			</label>
			<input
				id="email"
				type="text"
				required
				className="p-2 m-2 mt-1 rounded border-2 focus:border-blue-300 outline-none"
			/>
			<label for="password" className="text-left ml-2 mt-4 font-medium">
				Password
			</label>
			<input
				type="password"
				required
				className="p-2 m-2 mt-1 rounded border-2 focus:border-blue-300 outline-none"
			/>
			<button className="p-2 m-1 bg-blue-500 rounded text-white hover:bg-blue-600 h-10 hover:bg-blue-600 mt-4">
				{props.type}
			</button>
		</div>
	);
};

export default Card;
