import React from "react";
import Logo from "../../assets/svg/Logo";
import {Link, useHistory} from 'react-router-dom';
import { clearToken } from "../../api/index";
	
const Navbar = () => {
		const history = useHistory();
		function clickHandler() {
			clearToken().then((res) => console.log(res));
			history.push("/login");
			return;
    }			
		return (
      <div
        className="flex items-center justify-between w-screen py-1 px-7 shadow-md fixed"
        style={{ backgroundColor: "#fafafb" }}
      >
        <a href="/">
          <div className="hover:gray-300 ml-24">
            <Logo />
          </div>
        </a>
        <div className="flex items-center w-1/2 ">
          <img
            src="https://image.flaticon.com/icons/png/512/622/622669.png"
            alt="search"
            className="w-7 h-7 mx-2"
          />
          <input
            type="search"
            className="placeholder-gray-500 w-full h-10 border-2 border-gray-200 p-3 rounded focus:border-blue-300 outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center justify-evenly">
          <Link to="/login">
            <button className="flex items-center p-2 m-1 h-10 rounded bg-blue-100 border-2 border-blue-300 hover:bg-blue-200 text-blue-600">
              Log in
            </button>
          </Link>
          <Link to="/register">
            <button className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
              Sign up
            </button>
          </Link>

          <button
            onClick={clickHandler}
            className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10"
          >
            Log out
          </button>
        </div>
      </div>
    );
};

export default Navbar;
