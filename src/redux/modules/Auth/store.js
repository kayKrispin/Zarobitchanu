import * as types from "./types";
import {
   registerRequest,
   registerRequestSuccess,
   registerReuqestError,
   showLoading,
   hideLoading
} from "./reducers";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return registerRequest(state, action);
        case types.REGISTER_REQUEST_SUCCESS:
            return registerRequestSuccess(state, action);
        case types.REGISTER_REQUEST_ERROR:
            return registerReuqestError(state, action);
        case types.SHOW_LOADING:
            return showLoading(state, action);
        case types.HIDE_LOADING:
            return hideLoading(state, action);
        default:
            return state;
    }
};
