import * as types from "./types";

export const registerRequest = credentials => ({
  type: types.REGISTER_REQUEST,
  credentials
});

export const registerRequestSuccess = user => ({
  type: types.REGISTER_REQUEST_SUCCESS,
  user
});

export const registerRequestError = error => ({
  type: types.REGISTER_REQUEST_ERROR,
  error
});

export const verifyRequest = () => ({
  type: types.VERIFY_USER_REQUEST,
});

export const verifyRequestSuccess = user => ({
  type: types.VERIFY_USER_REQUEST_SUCCESS,
  user
});

export const verifyRequestError = error => ({
  type: types.VERIFY_USER_REQUEST_ERROR,
  error
});

export const loginRequest = credentials => ({
  type: types.LOGIN_REQUEST,
  credentials
});

export const loginRequestSuccess = user => ({
  type: types.LOGIN_REQUEST_SUCCESS,
  user
});

export const loginRequestError = error => ({
  type: types.LOGIN_REQUEST_ERROR,
  error
});

export const loginSocialRequest = credentials => ({
  type: types.LOGIN_SOCIAL_REQUEST,
  credentials
});

export const loginSocialRequestSuccess = user => ({
  type: types.LOGIN_REQUEST_SUCCESS,
  user
});

export const loginSocialRequestError = error => ({
  type: types.LOGIN_REQUEST_ERROR,
  error
});

export const activateAccountRequest = code => ({
  type: types.ACTIVATE_USER_ACCOUNT_REQUEST,
  code
});

export const activateAccountSuccess = user => ({
  type: types.LOGIN_REQUEST_SUCCESS,
  user
});

export const activateAccountRequestError = error => ({
  type: types.LOGIN_REQUEST_ERROR,
  error
});

export const resetPasswordRequest = email => ({
  type: types.RESET_PASSWORD_REQUEST,
  email
});

export const resetPasswordSuccess = user => ({
  type: types.RESET_PASSWORD_REQUEST_SUCCESS,
  user
});

export const resetPasswordRequestError = error => ({
  type: types.RESET_PASSWORD_REQUEST_ERROR,
  error
});

export const resetPasswordConfirmationRequest = (password, code) => ({
  type: types.RESET_PASSWORD_CONFIRMATION_REQUEST,
  password,
  code
});

export const resetPasswordConfirmationSuccess = message => ({
  type: types.RESET_PASSWORD_CONFIRMATION_REQUEST_SUCCESS,
  message
});

export const resetPasswordConfirmationRequestError = error => ({
  type: types.RESET_PASSWORD_REQUEST_ERROR,
  error
});

export const clearError = () => ({
  type: types.CLEAR_ERROR
});

export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_REQUEST_SUCCESS
});
