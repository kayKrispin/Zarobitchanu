import * as types from "../Forum/types";

export const createForumRequest = data => ({
    type: types.CREATE_FORUM_REQUEST,
    data
});

export const createForumRequestSuccess = forum => ({
    type: types.REGISTER_REQUEST_SUCCESS,
    user
});

export const registerRequestError = error => ({
    type: types.REGISTER_REQUEST_ERROR,
    error
});
