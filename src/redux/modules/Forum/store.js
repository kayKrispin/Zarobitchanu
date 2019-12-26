import * as types from "./types";
import {
  createForumRequestError,
  createForumRequestSuccess,
  getForumsRequestSuccess,
  getForumsRequestError,
  deleteForumRequestSuccess,
  deleteForumRequestError,
  getTopicsRequestError,
  getTopicsRequestSuccess,
  deleteTopicRequestError,
  deleteTopicRequestSuccess,
  searchTopicsRequestSuccess,
  setActiveForumId,
  createReplySuccess,
  createReplyError,
  getRepliesSuccess,
  getRepliesError,
  likeUnlikeSuccess,
  resetForums
} from "./reducers";
import {
  showLoading, hideLoading
} from "./reducers";

export const initialState = {
  forum: {},
  forums: [],
  topics: [],
  replies: [],
  selectedForumId: "" ||
    JSON.parse(localStorage.getItem("forumId")) &&
    JSON.parse(localStorage.getItem("forumId")).id,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FORUM_REQUEST_SUCCESS:
      return createForumRequestSuccess(state, action);

    case types.CREATE_FORUM_REQUEST_ERROR:
      return createForumRequestError(state, action);

    case types.GET_FORUMS_REQUEST_SUCCESS:
      return getForumsRequestSuccess(state, action);

    case types.GET_FORUMS_REQUEST_ERROR:
      return getForumsRequestError(state, action);

    case types.GET_TOPICS_REQUEST_SUCCESS:
      return getTopicsRequestSuccess(state, action);

    case types.GET_TOPICS_REQUEST_ERROR:
      return getTopicsRequestError(state, action);

    case types.DELETE_FORUM_REQUEST_SUCCESS:
      return deleteForumRequestSuccess(state, action);

    case types.DELETE_FORUM_REQUEST_ERROR:
      return deleteForumRequestError(state, action);

    case types.DELETE_TOPIC_REQUEST_SUCCESS:
      return deleteTopicRequestSuccess(state, action);

    case types.DELETE_TOPIC_REQUEST_ERROR:
      return deleteTopicRequestError(state, action);

    case types.SEARCH_TOPICS_REQUEST_SUCCESS:
      return searchTopicsRequestSuccess(state, action);

    case types.SEARCH_TOPICS_REQUEST_ERROR:
      return getTopicsRequestError(state, action);

    case types.CREATE_REPLY_REQUEST_SUCCESS:
      return createReplySuccess(state, action);

    case types.CREATE_REPLY_REQUEST_ERROR:
      return createReplyError(state, action);

    case types.GET_REPLIES_REQUEST_SUCCESS:
      return getRepliesSuccess(state, action);

    case types.GET_REPLIES_REQUEST_ERROR:
      return getRepliesError(state, action);

    case types.SET_ACTIVE_FORUM_ID_SUCCESS:
      return setActiveForumId(state, action);

    case types.LIKE_UNLIKE_REPLY_SUCCESS:
      return likeUnlikeSuccess(state, action);

    case types.SHOW_LOADING:
      return showLoading(state, action);

    case types.RESET_FORUMS:
      return resetForums(state, action);

    case types.HIDE_LOADING:
      return hideLoading(state, action);
    default:
      return state;
  }
};
