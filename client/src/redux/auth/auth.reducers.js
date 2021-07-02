import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./auth.types";

const initialState = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        loading: false,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
