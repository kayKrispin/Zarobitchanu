import * as types from "./types";
import {
   registerRequest,
   registerRequestSuccess,
   registerReuqestError,
   loginRequest,
   loginRequestSuccess,
   loginRequestError,
   showLoading,
   hideLoading
} from "./reducers";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: " "
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return registerRequest(state, action);

        case types.REGISTER_REQUEST_SUCCESS:
            return registerRequestSuccess(state, action);

        case types.REGISTER_REQUEST_ERROR:
            return registerReuqestError(state, action);

        case types.LOGIN_REQUEST:
            return loginRequest(state, action);

        case types.LOGIN_REQUEST_SUCCESS:
            return loginRequestSuccess(state, action);

        case types.LOGIN_REQUEST_ERROR:
            return loginRequestError(state, action);

        case types.SHOW_LOADING:
            return showLoading(state, action);

        case types.HIDE_LOADING:
            return hideLoading(state, action);

        default:
            return state;
    }
};
