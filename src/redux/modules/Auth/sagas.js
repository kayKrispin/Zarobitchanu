import { all, put, call, takeLatest } from "redux-saga/effects";
import * as auth from "./services";
import * as actions from "./actions";
import * as types from "./types";
import { modalTypes } from "../Modal";


function *register ({ credentials }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.register, credentials);

    localStorage.setItem("token", JSON.stringify(response.token));

    yield put(actions.registerRequestSuccess(response));
  } catch (error) {

    yield put(actions.registerRequestError(error.toString()));
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
    console.log(error)

    yield put(actions.loginRequestError(error.toString()));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *activateAccount ({ code }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.activateAccount, code);

    yield put(actions.activateAccountSuccess(response));
  } catch (error) {
    const errorMessage = yield error.json();

    yield put(actions.activateAccountRequestError(errorMessage.error));
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

function *resetPassword ({ email }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.resetPassword, email);

    yield put(actions.resetPasswordSuccess(response));
  } catch (error) {

    yield put(actions.resetPasswordRequestError(error.toString()));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *resetPasswordConfirmation (data) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.resetPasswordConfirmation, data);

    yield put(actions.resetPasswordConfirmationSuccess(response));
  } catch (error) {
    const errorMessage = yield error.json();

    yield put(actions.resetPasswordConfirmationRequestError(errorMessage.error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *logout () {

  yield put({ type: types.SHOW_LOADING });

  try {
    localStorage.clear();
    yield put(actions.logoutSuccess());
  } catch (error) {
    throw new Error("Something goes wrong");
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}

function *socialLogin ({ credentials }) {

  yield put({ type: types.SHOW_LOADING });

  try {
    const response = yield call(auth.socialLogin, credentials);

    localStorage.setItem("token", JSON.stringify(response.token));

    yield put({ type: modalTypes.CLOSE_MODAL });

    yield put(actions.loginSocialRequestSuccess(response));
  } catch (error) {

    yield put(actions.loginSocialRequestError(error));
  } finally {
    yield put({ type: types.HIDE_LOADING })
  }
}


export default function *() {
  yield all([
    yield takeLatest(types.VERIFY_USER_REQUEST, verify),
    yield takeLatest(types.REGISTER_REQUEST, register),
    yield takeLatest(types.LOGIN_REQUEST, login),
    yield takeLatest(types.LOGIN_SOCIAL_REQUEST, socialLogin),
    yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPassword),
    yield takeLatest(types.RESET_PASSWORD_CONFIRMATION_REQUEST, resetPasswordConfirmation),
    yield takeLatest(types.ACTIVATE_USER_ACCOUNT_REQUEST, activateAccount),
    yield takeLatest(types.LOGOUT_REQUEST, logout),
  ])
}
