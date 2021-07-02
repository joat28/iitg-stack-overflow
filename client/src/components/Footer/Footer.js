import React from 'react';

import { useSelector } from 'react-redux';


// FOOTER color : #242729
const Footer = () => {
    const loading = useSelector(state => state.loading.loading);
    return (
        <div className ={`bg-gray-800 text-gray-400 p-10 z-20 ${loading? "invisible":"visible" }`}>
            <div className="flex flex-col text-lg">
            <span >IITG Stackoverflow</span>
            <span >Coding Club, IIT Guwahati</span>
            </div>
            <span className="text-md ">Developed by <a className="text-white">Shashank Raj</a></span>
        </div>
    );
};

export default Footer;