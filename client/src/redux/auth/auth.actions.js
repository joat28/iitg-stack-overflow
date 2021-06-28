// import axios from "axios";
import { setAlert } from "../alert/alert.actions.js";
import {
	REGISTER_SUCCESS,
	// REGISTER_FAIL,
	LOGIN_SUCCESS,
	// LOGIN_FAIL,
	// LOGOUT,
} from "./auth.types";
import { createUser, checkUser } from "../../api/index";
// import setAuthToken from './auth.utils';

// Load User
// export const loadUser = () => async (dispatch) => {
//   if (localStorage.token) {

//   }
//   try {
//     const res = await axios.get('/api/auth');

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data.data,
//     });vk
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// Register User

export const register =
({ name, email, password }) =>
	(dispatch) => {
		const body = { name, email, password };
		createUser(body)
			.then((res) => {
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

// LOGIN USER

export const login =
	({ email, password }) =>
	async (dispatch) => {
		const body = { email, password };

		checkUser(body)
			.then((res) => {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res.data.data,
				});
				alert(res.data.message);
			})
			.catch((error) => {
				console.log(error.response);
				alert(`${error.response.data.message}`);
			});

		// try
		// const res = await axios.post('/api/auth', body, config);

		// dispatch(setAlert(res.data.message, 'success'));

		// dispatch(loadUser());
	};

// //LOGOUT
// export const logout = () => (dispatch) => {
//   dispatch(setAlert('User has logged out', 'success'));
//   localStorage.removeItem('token');

//   dispatch({type: LOGOUT});
// };
