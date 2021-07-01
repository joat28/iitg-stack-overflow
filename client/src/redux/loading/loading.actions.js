import { SET_LOADING, STOP_LOADING } from "./loading.types.js";

export const setLoadingAction = () => (dispatch) => {
  // console.log("loading started");
  dispatch({
    type: SET_LOADING,
  });
};
export const stopLoadingAction = () => (dispatch) => {
  // console.log("loading stopped");
  dispatch({
    type: STOP_LOADING,
  });
};
