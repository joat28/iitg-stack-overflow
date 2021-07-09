import React, { useEffect, useState } from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { getAllUsers } from "../../api/index";
import UserCard from "../../components/UserCard/UserCard";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-row">
        <LeftSideBar />
        <div className="mt-24 pl-72 text-left w-screen">
        <div className="text-3xl pl-5 mb-10"> Users </div>
        <div className="flex flex-row justify-left flex-wrap">
        {users && users.length>0 && users.map((user, index) => <UserCard key = {index} user={user} />)}
        </div>
        </div>
      </div>
    </div>
  );
};
export default UsersScreen;
