import { all, put, call, takeLatest } from "redux-saga/effects";
import * as auth from "./services";
import * as actions from "./actions";
import * as types from "./types";


function *createForum ({ data }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.createForum, data);

    yield put(actions.getForumsRequest());

    yield put(actions.createForumRequestSuccess(response));
  } catch (error) {
    const errorMessage = yield error.json();

    yield put(actions.createForumRequestError(errorMessage.error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *getForums () {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.getForums);

    yield put(actions.getForumsRequestSuccess(response));
  } catch (error) {

    yield put(actions.getForumsRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *deleteForum ({ id }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.deleteForum, id);

    yield put(actions.getForumsRequest());
    yield put(actions.deleteForumRequestSuccess(response));
  } catch (error) {

    yield put(actions.deleteForumRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *createTopic ({ data }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.createTopic, data);

    yield put(actions.getTopicsRequest(data.forumId));
    yield put(actions.createTopicRequestSuccess(response));
  } catch (error) {
    const errorMessage = yield error.json();

    yield put(actions.createTopicRequestError(errorMessage.error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *getTopics ({ id }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.getTopics, id);

    yield put(actions.getTopicsRequestSuccess(response));
  } catch (error) {

    yield put(actions.getTopicsRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *deleteTopic (data) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.deleteTopic, { ...data.forumId });

    yield put(actions.getTopicsRequest(data.forumId.forumId))
    yield put(actions.deleteTopicRequestSuccess(response));
  } catch (error) {

    yield put(actions.deleteTopicRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}


function *searchTopic (data) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.searchTopic, data);

    yield put(actions.searchTopicsRequestSuccess(response));
  } catch (error) {

    yield put(actions.searchTopicsRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}


function *createReply (data) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.createReply, data);

    yield put(actions.createReplyRequestSuccess(response));
  } catch (error) {

    yield put(actions.createReplyRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *setForumId ({ id }) {

  yield put({ type: types.SHOW_LOADING });

  try {

    localStorage.setItem("forumId", JSON.stringify({ id }))

    yield put(actions.setActiveForumidRequestSuccess(id));
  } catch (error) {

    yield put(actions.createReplyRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *getReplies (data) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.getReplies, data);

    yield put(actions.getReplyRequestSuccess(response));
  } catch (error) {

    yield put(actions.getReplyRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

export default function *() {
  yield all([
    yield takeLatest(types.CREATE_FORUM_REQUEST, createForum),
    yield takeLatest(types.GET_FORUMS_REQUEST, getForums),
    yield takeLatest(types.DELETE_FORUM_REQUEST, deleteForum),
    yield takeLatest(types.CREATE_TOPIC_REQUEST, createTopic),
    yield takeLatest(types.GET_TOPICS_REQUEST, getTopics),
    yield takeLatest(types.DELETE_TOPIC_REQUEST, deleteTopic),
    yield takeLatest(types.SEARCH_TOPICS_REQUEST, searchTopic),
    yield takeLatest(types.CREATE_REPLY_REQUEST, createReply),
    yield takeLatest(types.SET_ACTIVE_FORUM_ID, setForumId),
    yield takeLatest(types.GET_REPLIES_REQUEST, getReplies)
  ])
}
