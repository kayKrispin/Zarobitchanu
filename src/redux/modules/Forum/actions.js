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

export const createTopicRequest = data => ({
    type: types.CREATE_TOPIC_REQUEST,
    data
});

export const createTopicRequestSuccess = topics => ({
    type: types.CREATE_TOPIC_REQUEST_SUCCESS,
    topics
});

export const createTopicRequestError = error => ({
    type: types.CREATE_TOPIC_REQUEST_ERROR,
    error
});

export const getTopicsRequest = id => ({
    type: types.GET_TOPICS_REQUEST,
    id
});

export const getTopicsRequestSuccess = forum => ({
    type: types.GET_TOPICS_REQUEST_SUCCESS,
    forum
});

export const getTopicsRequestError = error => ({
    type: types.GET_TOPICS_REQUEST_ERROR,
    error
});

export const deleteForumRequest = id => ({
    type: types.DELETE_FORUM_REQUEST,
    id
});

export const deleteForumRequestSuccess = forums => ({
    type: types.DELETE_FORUM_REQUEST_SUCCESS,
    forums
});

export const deleteForumRequestError = error => ({
    type: types.DELETE_FORUM_REQUEST_ERROR,
    error
});

export const getForumsRequest = () => ({
    type: types.GET_FORUMS_REQUEST
});

export const getForumsRequestSuccess = forums => ({
    type: types.GET_FORUMS_REQUEST_SUCCESS,
    forums
});

export const getForumsRequestError = error => ({
    type: types.GET_FORUMS_REQUEST_ERROR,
    error
});

