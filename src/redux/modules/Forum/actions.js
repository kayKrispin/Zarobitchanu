import * as types from "../Forum/types";

export const createForumRequest = data => ({
    type: types.CREATE_FORUM_REQUEST,
    data
});

export const createForumRequestSuccess = forum => ({
    type: types.CREATE_FORUM_REQUEST_SUCCESS,
    forum
});

export const createForumRequestError = error => ({
    type: types.CREATE_FORUM_REQUEST_ERROR,
    error
});
