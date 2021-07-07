import { SET_ALERT, REMOVE_ALERT } from "./alert.types";

const initialState = {
  visible: false,
  message: "",
  status: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        visible: true,
        message: action.payload.message,
        status: action.payload.status,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
