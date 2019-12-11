import * as types from "./types";
import {
  registerRequest,
  registerRequestSuccess,
  registerReuqestError,
  loginRequest,
  loginRequestSuccess,
  loginRequestError,
  verifyRequest,
  verifyRequestSuccess,
  verifyRequestError,
  showLoading,
  hideLoading,
  logoutRequestSuccess,
  resetPasswordRequestSuccess,
  resetPasswordConfirmationRequestSuccess,
  clearError
} from "./reducers";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: " ",
  verifying: true
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

    case types.VERIFY_USER_REQUEST:
      return verifyRequest(state, action);

    case types.VERIFY_USER_REQUEST_SUCCESS:
      return verifyRequestSuccess(state, action);

    case types.RESET_PASSWORD_REQUEST_SUCCESS:
      return resetPasswordRequestSuccess(state, action);

    case types.RESET_PASSWORD_CONFIRMATION_REQUEST_SUCCESS:
      return resetPasswordConfirmationRequestSuccess(state, action);

    case types.VERIFY_USER_REQUEST_ERROR:
      return verifyRequestError(state, action);

    case types.SHOW_LOADING:
      return showLoading(state, action);

    case types.HIDE_LOADING:
      return hideLoading(state, action);

    case types.CLEAR_ERROR:
      return clearError(state, action);

    case types.RESET_PASSWORD_REQUEST_ERROR:
      return loginRequestError(state, action);

    case types.LOGOUT_REQUEST_SUCCESS:
      return logoutRequestSuccess(state, action);

    default:
      return state;
  }
};
