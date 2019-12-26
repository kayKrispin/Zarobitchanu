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

export const deleteTopicRequest = (forumId, topicId) => ({
  type: types.DELETE_TOPIC_REQUEST,
  forumId,
  topicId
});

export const deleteTopicRequestSuccess = topics => ({
  type: types.DELETE_TOPIC_REQUEST_SUCCESS,
  topics
});

export const deleteTopicRequestError = error => ({
  type: types.DELETE_TOPIC_REQUEST_ERROR,
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

export const searchTopicsRequest = (key, forumId) => ({
  type: types.SEARCH_TOPICS_REQUEST,
  key,
  forumId
});

export const searchTopicsRequestSuccess = topics => ({
  type: types.SEARCH_TOPICS_REQUEST_SUCCESS,
  topics
});

export const searchTopicsRequestError = error => ({
  type: types.SEARCH_TOPICS_REQUEST_ERROR,
  error
});

export const createReplyRequest = (data, page, limit) => ({
  type: types.CREATE_REPLY_REQUEST,
  data,
  page,
  limit
});


export const createReplyRequestSuccess = replies => ({
  type: types.CREATE_REPLY_REQUEST_SUCCESS,
  replies
});

export const createReplyRequestError = error => ({
  type: types.CREATE_REPLY_REQUEST_ERROR,
  error
});

export const setActiveForumidRequest = id => ({
  type: types.SET_ACTIVE_FORUM_ID,
  id
});

export const setActiveForumidRequestSuccess = id => ({
  type: types.SET_ACTIVE_FORUM_ID_SUCCESS,
  id
});

export const getRepliesRequest = (forumId, topicId, page, pageLimit) => ({
  type: types.GET_REPLIES_REQUEST,
  forumId,
  topicId,
  page,
  pageLimit
});

export const getReplyRequestSuccess = replies => ({
  type: types.GET_REPLIES_REQUEST_SUCCESS,
  replies
});

export const getReplyRequestError = error => ({
  type: types.GET_REPLIES_REQUEST_ERROR,
  error
});

export const likeUnlikeRequest = (userId, replyId, isLiked, topicId, forumId, page, pageLimit) => ({
  type: types.LIKE_UNLIKE_REPLY,
  userId,
  replyId,
  isLiked,
  topicId,
  forumId,
  page,
  pageLimit
});

export const likeUnlikeSuccess = length => ({
  type: types.LIKE_UNLIKE_REPLY_SUCCESS,
  length
});

export const resetForums = () => ({
  type: types.RESET_FORUMS
});

