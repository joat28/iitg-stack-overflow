import React from 'react';
import { NavLink } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';

const NotFoundScreen = () => {
    return (
        <div className="h-1/2 bg-no-repeat bg-cover">
            <LeftSideBar styles={"border-r border-gray-200"}/>
            <img className="wmx100 ml-96 pt-20" src="https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg" alt="Page not found"></img>
            <NavLink to='/' className="text-gray-800">
              Back to home page
            </NavLink>
        </div>
    );
};

export default NotFoundScreen;

