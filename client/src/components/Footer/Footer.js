import React from 'react';

import { useSelector } from 'react-redux';

// FOOTER color : #242729
const Footer = () => {
    const {loading} = useSelector(state => state.loading);
    //TODO: Report a Problem/Contact Us
    return (
        <>
        {!loading && <div className ={` w-full bg-gray-800 text-gray-400 p-10 ${loading? "invisible":"visible" }`}>
            <div className="flex flex-col text-lg">
            <span >IITG Stackoverflow</span>
            <span >Coding Club, IIT Guwahati</span>
            </div>
            <span className="text-md ">Developed by Shashank Raj</span>
        </div>}
        </>
    );
};

export default Footer;