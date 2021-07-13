import React from "react";
import {NavLink} from 'react-router-dom';
import { useSelector } from "react-redux";

// FOOTER color : #242729
const Footer = () => {
  const loading = useSelector((state) => state.loading.loading);
  return (
    <div
      className={`absolute inset-x-0 w-full bg-gray-800 text-gray-400 p-10 ${
        loading ? "invisible" : "visible"
      }`}
    >
      <div className="flex flex-col text-lg">
        <span className = "text-xl py-1">IITG Stackoverflow</span>
        <span className = "text-xl pb-1">Coding Club, IIT Guwahati</span>
        <div>
        <NavLink to = "/" className="px-3 py-1 hover:text-gray-100">
          Home
        </NavLink>
        <NavLink to = "/questions" className="px-3 py-1 hover:text-gray-100">
          Questions
        </NavLink>
        <NavLink to = "/users" className="px-3 py-1 hover:text-gray-100">
          Users
        </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Footer;
