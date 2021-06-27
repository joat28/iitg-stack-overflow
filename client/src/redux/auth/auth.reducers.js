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
            }
        case REGISTER_FAIL :
            return {
                ...state,
                loading: false,
        }
        case LOGOUT : 
            return {
                ...state,
                isAuthenticated : false,
                loading: false,
            }
        default: return state
    }
}

export default reducer;