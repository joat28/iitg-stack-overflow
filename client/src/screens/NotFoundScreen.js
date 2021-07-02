import React from "react";
import { NavLink } from "react-router-dom";
// import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import { useLocation } from "react-router-dom";

const NotFoundScreen = () => {
	const location = useLocation();
    const styles = {
            color: "#fff",
            textShadow: "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa"
    }
	return (
		<div className="h-screen w-full bg-no-repeat bg-black bg-cover pt-20">
			<p className="text-white text-lg" style={styles}> 404! Seems like you are lost in the MATRIX</p>
			<img
				className="wmx100 ml-96 pt-20 pl-40"
				src="https://cdn.shopify.com/s/files/1/0684/5947/articles/morpheus-red-pill-blue-pill_420x.jpg?v=1536175294"
				alt="Page not found"
			></img>
			<NavLink
				to="/"
				className="text-red-800 font-bold p-1 ml-2/5 mr-64 transform scale-150 --tw-scale-x: 1.5 transition duration-700 ease-in-out hover:bg-red-500"
			>
				Home
			</NavLink>
			<NavLink
				to={location.pathname}
				className="text-blue-800 font-bold w-16 p-1 transform scale-150 transition duration-700 ease-in-out hover:bg-blue-500 hover:"
            >
				Reload
			</NavLink>
		</div>
	);
};

export default NotFoundScreen;
