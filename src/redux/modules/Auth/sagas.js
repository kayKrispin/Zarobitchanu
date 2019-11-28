import { all, put, call, takeLatest } from "redux-saga/effects";

import * as auth from "./services";
import * as actions from "./actions";
import * as types from "./types";
import { modalTypes } from "../Modal";


function *register ({ credentials }) {

    yield put({ type: types.SHOW_LOADING });

    try {
        const response = yield call(auth.register, credentials);

        yield put(actions.registerRequestSuccess(response));
    } catch (error) {
        const errorMessage = yield error.json();

        yield put(actions.registerRequestError(errorMessage.error));
    } finally {
        yield put({ type: types.HIDE_LOADING })
    }
}

function *login ({ credentials }) {

    yield put({ type: types.SHOW_LOADING });

    try {
        const response = yield call(auth.login, credentials);

        localStorage.setItem("token", JSON.stringify(response.token));

        yield put({ type: modalTypes.CLOSE_MODAL });

        yield put(actions.loginRequestSuccess(response));
    } catch (error) {
        const errorMessage = yield error.json();

        yield put(actions.loginRequestError(errorMessage.error));
    } finally {
        yield put({ type: types.HIDE_LOADING })
    }
}

function *verify () {

    yield put({ type: types.SHOW_LOADING });

    try {
        const response = yield call(auth.verify);

        yield put(actions.verifyRequestSuccess(response));
    } catch (error) {

        yield put(actions.verifyRequestError());
    } finally {
        yield put({ type: types.HIDE_LOADING })
    }
}

export default function *() {
    yield all([
        yield takeLatest(types.VERIFY_USER_REQUEST, verify),
        yield takeLatest(types.REGISTER_REQUEST, register),
        yield takeLatest(types.LOGIN_REQUEST, login),
    ])
}
