import * as types from "./types";
import {
  createForumRequestError,
  createForumRequestSuccess,
  getForumsRequestSuccess,
  getForumsRequestError,
  deleteForumRequestSuccess,
  deleteForumRequestError,
  getTopicsRequestError,
  getTopicsRequestSuccess
} from "./reducers";
import {
  showLoading, hideLoading
} from "./reducers";

const initialState = {
  forum: {},
  forums: [],
  topics: [],
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
      case types.SHOW_LOADING:
          return showLoading(state, action);
      case types.HIDE_LOADING:
          return hideLoading(state, action);
    default:
      return state;
  }
};
