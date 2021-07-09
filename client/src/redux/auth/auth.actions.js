// import axios from "axios";
import { setAlert } from "../alert/alert.actions.js";
import { stopLoadingAction } from "../loading/loading.actions.js";
import {
  REGISTER_SUCCESS,
  // REGISTER_FAIL,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
} from "./auth.types";
import { createUser, checkUser, loadUserCall } from "../../api/index";

// Load User
export const loadUser = () => (dispatch) => {
  if (localStorage.token) {
    // console.log(localStorage.token)
    loadUserCall()
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        dispatch(stopLoadingAction());
      })
      .catch((error) => {
        console.log(error);
        dispatch(stopLoadingAction());
      });
  } else {
    dispatch(stopLoadingAction());
  }
};

// Register User

export const register = ({ name, email, password }) => {
  return (dispatch) => {
    const body = { name, email, password };
    createUser(body)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        res.data.status = true;
        dispatch(setAlert(res.data));
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        error.response.data.status = false;
        dispatch(setAlert(error.response.data));
      });
  };
};
// LOGIN USER

export const login =
  ({ email, password }) =>
  (dispatch) => {
    const body = { email, password };
    checkUser(body)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.data,
        });
        res.data.status = true;
        dispatch(setAlert(res.data));
      })
      .catch((error) => {
        error.response.data.status = false;
        dispatch(setAlert(error.response.data));
      });
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(
    setAlert({
      message: "User logged out successfully",
      status: true,
    })
  );
  dispatch({ type: LOGOUT });
};
