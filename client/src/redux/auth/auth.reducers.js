import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from './auth.types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    registerSuccess : false,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: 
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_FAIL : 
            return {
              ...state, 
              isAuthenticated: false,
              loading: false,
            }
        case REGISTER_SUCCESS :
            return {
              ...state,
              loading: false,
              success: true,
              registerSuccess: true
            }
        case REGISTER_FAIL :
            return {
                ...state,
                loading: false,
                registerSuccess: false
        }
        case LOGOUT : 
            return {
                ...state,
                isAuthenticated : false,
                loading: false,
                registerSuccess:false,
            }
        default: return state
    }
}

export default reducer;