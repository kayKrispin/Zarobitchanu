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
