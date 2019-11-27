import { all, put, call, takeLatest } from "redux-saga/effects";

import * as auth from "./services";
import * as actions from "./actions";
import * as types from "./types";


function *register ({ credentials }) {

    yield put({ type: types.SHOW_LOADING });

    try {
        const response = yield call(auth.register, credentials);
        yield put(actions.registerRequestSuccess(response));
    } catch (error) {
        yield put(actions.registerRequestError(error));
    } finally {
        yield put({ type: types.HIDE_LOADING })
    }
}

export default function *() {
    yield all([
        yield takeLatest(types.REGISTER_REQUEST, register)
    ])
}
