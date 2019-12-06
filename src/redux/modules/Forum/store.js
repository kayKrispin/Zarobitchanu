import * as types from "./types";
import {
  createForumRequestError,
  createForumRequestSuccess
} from "./reducers";
import {
  showLoading, hideLoading
} from "./reducers";

const initialState = {
  forum: {},
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_FORUM_REQUEST_SUCCESS:
      return createForumRequestSuccess(state, action);
    case types.CREATE_FORUM_REQUEST_ERROR:
      return createForumRequestError(state, action);
    case types.SHOW_LOADING:
      return showLoading(state, action);
    case types.HIDE_LOADING:
      return hideLoading(state, action);
    default:
      return state;
  }
};
