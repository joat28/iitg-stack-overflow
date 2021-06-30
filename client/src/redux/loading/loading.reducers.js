import { SET_LOADING, STOP_LOADING } from "./loading.types";

const initialState = {
  loading: true,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: true,
      };
    case STOP_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
