import { SET_ALERT, REMOVE_ALERT } from "./alert.types";

export const setAlert =
  ({ message, status }, timeout = 2500) =>
  (dispatch) => {
    //   const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        status,
      },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };
