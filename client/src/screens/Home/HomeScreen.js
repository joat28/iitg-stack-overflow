import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const HomeScreen = () => {
    const checkAuthenticated = () => {
        
    }
    return (

            <React.Fragment> 
         			<Navbar />
                   <a href ="/login" >
                   <img
					src="https://picsum.photos/400/400                    "
					alt="search"
					//className="w-7 h-7 mx-2"
				/>
                      </a> 
            		</React.Fragment>
    );
};
export default HomeScreen;