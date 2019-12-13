import authReducer, { initialState } from "./store";
import * as types from "./types";
import * as modalTypes from "../Modal/types";
import authSagas from "./sagas";
import { login, register, verify } from "./services";
import {
  loginRequest,
  registerRequest,
  verifyRequest
} from "./actions";
import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

describe("Redux: Auth", () => {
  it("log in the user with success", () => {
    const user = { user: {}, isAuthenticated: true, loading: false, error: " ",
      verifying: true };
    const fakeData = { email: "admin@coaxsoft.com", password: "qwerty" };

    return expectSaga(authSagas)
      .withReducer(authReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .put({ type: modalTypes.CLOSE_MODAL })
      .provide([
        [call(login, fakeData), user],
      ])
      .put({ type: types.LOGIN_REQUEST_SUCCESS, user })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        ...user,
      })
      .dispatch(loginRequest(fakeData))
      .silentRun();
  });

  it("register user with success", () => {
    const user = { firstName: "michael", lastName: "jackson" };
    const fakeData = { firstName: "michael", lastName: "jackson" };

    return expectSaga(authSagas)
      .withReducer(authReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(register, fakeData), user],
      ])
      .put({ type: types.REGISTER_REQUEST_SUCCESS, user })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        isAuthenticated: false,
        user: {},
        loading: false,
        error: " ",
        verifying: true,
        emailVerifyed: false,
        ...user
      })
      .dispatch(registerRequest(fakeData))
      .silentRun();
  });

  it("activate user success", () => {
    const user = { emailVerified: true };

    return expectSaga(authSagas)
      .withReducer(authReducer)

      // Test Saga
      .put({ type: types.SHOW_LOADING })
      .provide([
        [call(verify), user],
      ])
      .put({ type: types.VERIFY_USER_REQUEST_SUCCESS, user })
      .put({ type: types.HIDE_LOADING })

      // Test reducer
      .hasFinalState({
        isAuthenticated: true,
        emailVerified: true,
        user: {},
        loading: false,
        error: " ",
        verifying: false,
      })
      .dispatch(verifyRequest())
      .silentRun();
  });
});

describe("Redux: Auth. Action Creators", () => {

  it("should login successfully", () => {
    const state = { loading: false };
    const newState = authReducer(state, {
      type: types.LOGIN_REQUEST_SUCCESS
    });
    expect(newState).toEqual({ loading: false, error: " ", isAuthenticated: true })
  });

  it("should login unsuccessfully", () => {
    const state = { loading: false };
    const error = "Something goes wrong";
    const newState = authReducer(state, {
      type: types.LOGIN_REQUEST_ERROR,
      error
    });
    expect(newState).toEqual({ loading: false, user: {}, error: error })
  });

  it("should register successfully", () => {
    const state = { loading: false };
    const newState = authReducer(state, {
      type: types.REGISTER_REQUEST_SUCCESS
    });
    expect(newState).toEqual({ loading: false, error: " ", emailVerifyed: false })
  });

  it("should register unsuccessfully", () => {
    const state = { loading: false };
    const error = "Something goes wrong";
    const newState = authReducer(state, {
      type: types.REGISTER_REQUEST_ERROR,
      error
    });
    expect(newState).toEqual({ loading: false, user: {}, error: error })
  });

  it("should show loading", () => {
    const state = { loading: false };
    const newState = authReducer(state, {
      type: types.SHOW_LOADING
    });
    expect(newState).toEqual({ loading: true })
  });

  it("should hide loading", () => {
    const state = { loading: true };
    const newState = authReducer(state, {
      type: types.HIDE_LOADING
    });
    expect(newState).toEqual({ loading: false })
  });

  it("should logout", () => {
    const state = { isAuthenticated: true };
    const newState = authReducer(state, {
      type: types.LOGOUT_REQUEST_SUCCESS
    });
    expect(newState).toEqual({ user: {}, isAuthenticated: false })
  });

  it("should verify email", () => {
    const state = { isAuthenticated: false };
    const newState = authReducer(state, {
      type: types.VERIFY_USER_REQUEST_SUCCESS
    });
    expect(newState).toEqual({ isAuthenticated: true, verifying: false })
  });

  it("should reset password success", () => {
    const state = { isAuthenticated: false };
    const newState = authReducer(state, {
      type: types.RESET_PASSWORD_CONFIRMATION_REQUEST_SUCCESS
    });
    expect(newState).toEqual({ isAuthenticated: false, error: " " })
  });
});
