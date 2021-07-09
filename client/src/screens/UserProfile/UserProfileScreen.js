import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../api/index";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import moment from "moment";

const UserProfileScreen = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log(location.pathname.split("/")[2]);
    getUser(location.pathname.split("/")[2])
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-row">
        <LeftSideBar />
        <div className="mt-24 pl-72 flex flex-col">
          <div className="flex flex-col p-16 relative" style={{boxShadow: "inset 0 10em 0 gray"}}>
            <img
              className="w-36 h-36 block border border-gray-300 z-5 opacity-100"
              src={`https://avatars.dicebear.com/api/jdenticon/${user.name}.svg`}
              alt="profile"
            ></img>
            <span className="text-gray-600 text-md font-semibold">
              {user && user.name}
            </span>
            <div>
              Created:
              <span className="text-gray-600 text-md font-semibold">
                { moment(user.createdAt).fromNow()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;
