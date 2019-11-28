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

export const clearError = () => ({
   type: types.CLEAR_ERROR
});
