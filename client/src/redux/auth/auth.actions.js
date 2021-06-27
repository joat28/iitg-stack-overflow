import axios from 'axios';
// import {setAlert} from '../alert/alert.actions';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './auth.types';

import { createUser, checkUser } from '../../api/index';

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
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR,
//     });
//   }
// };

// Register User
export const register = ({name, email, password}) => (dispatch) => {

  const body = JSON.stringify({name, email, password});
  createUser(body).then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.data,
            });
            alert("user created");
          }).catch(error => alert('Error in creatng user'));
    
    // dispatch({
    //   type: REGISTER_FAIL,
    // });catch (err) {
// Login User
};

// // // export const login = ({email, password}) => async (dispatch) => {
// // //   const config = {
// // //     headers: {
// // //       'Content-Type': 'application/json',
// // //     },
// // //   };

// // //   const body = JSON.stringify({email, password});

// // //   try 
// // //     const res = await axios.post('/api/auth', body, config);

// // //     dispatch({
// // //       type: LOGIN_SUCCESS,
// // //       payload: res.data.data,
// // //     });

// // //     dispatch(setAlert(res.data.message, 'success'));

// // //     dispatch(loadUser());
// // //   } catch (err) {
// // //     dispatch(setAlert(err.response.data.message, 'danger'));

// // //     dispatch({
// // //       type: LOGIN_FAIL,
// // //     })
// // //   }
// // // };

// //LOGOUT
// export const logout = () => (dispatch) => {
//   dispatch(setAlert('User has logged out', 'success'));
//   localStorage.removeItem('token');

//   dispatch({type: LOGOUT});
// };