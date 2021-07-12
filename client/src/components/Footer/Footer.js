import React from "react";

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
        <span>IITG Stackoverflow</span>
        <span>Coding Club, IIT Guwahati</span>
      </div>
    </div>
  );
};

export default Footer;
