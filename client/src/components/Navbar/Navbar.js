import React, {useState} from "react";
import Logo from "../../assets/svg/Logo";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.loading);
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  function logoutHandler() {
    dispatch(logout());
    history.push("/login");
    return;
  }
  const pressHandler = (event) => {
    if(event.key === "Enter")
    {
      if(search !== "")
      {
        // console.log("API call");
        history.push(`/search/${search}`)
      }
      else
      {
        history.push("/");
      }
      console.log("Enter key pressed!")
    }
  }

   const onChangeHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  }
  
  return (
    <div
      className="flex items-center z-10 justify-between w-screen py-1 px-7 shadow-md fixed border-t-4 border-yellow-500"
      style={{ backgroundColor: "#FAFAFB" }}
    >
      <div className="hover:gray-300 ml-24">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>
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
          onChange={onChangeHandler}
          onKeyUp={pressHandler}
        />

      </div>
      <div
        className={`flex items-center justify-evenly ${
          loading ? "invisible" : "visible"
        }`}
      >
        {isAuthenticated ? (
          <>
            <Link to={`/users/${user._id}`}><img className="w-8 h-8 border border-gray-300" alt = "img" src={`https://avatars.dicebear.com/api/jdenticon/${user.name}.svg`}></img></Link>
            <Link to={`/users/${user._id}`}><span className="p-1"> {user.name}</span></Link>
            <button
              onClick={logoutHandler}
              className="flex items-center p-2 m-1 ml-6 h-10 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="flex items-center p-2 m-1 h-10 rounded bg-blue-100 border-2 border-blue-300 hover:bg-blue-200 text-blue-600">
                Log in
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="flex items-center p-2 m-1 bg-blue-500 border-2 border-blue-700 rounded text-white hover:bg-blue-600 h-10">
                Sign up
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
