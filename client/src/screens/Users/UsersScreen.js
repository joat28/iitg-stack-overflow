import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

const UsersScreen = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row">
        <LeftSideBar />
        {
          user.map(item => <UserItem props={item}/>)
        }
      </div>
    </div>
  );
};
export default UsersScreen;