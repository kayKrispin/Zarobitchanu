import { all, put, call, takeLatest } from "redux-saga/effects";
import * as auth from "./services";
import * as actions from "./actions";
import * as types from "./types";


function *createForum ({ data }) {

  yield put({ type: types.SHOW_LOADING });

  console.log(data)

  try {
    const response = yield call(auth.createForum, data);

    yield put(actions.createForumRequestSuccess(response));
  } catch (error) {
    const errorMessage = yield error.json();

    yield put(actions.createForumRequestError(errorMessage.error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}



export default function *() {
  yield all([
    yield takeLatest(types.CREATE_FORUM_REQUEST, createForum),
  ])
}
