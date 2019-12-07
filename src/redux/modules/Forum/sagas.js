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
        console.log(response)

        yield put(actions.getTopicsRequestSuccess(response));
    } catch (error) {

        yield put(actions.getTopicsRequestError(error));
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
    yield takeLatest(types.GET_TOPICS_REQUEST, getTopics)
  ])
}
