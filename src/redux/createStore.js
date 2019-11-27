import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { store as modalStore } from './modules/Modal';
import { store as authStore } from './modules/Auth';
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  authStore,
  modalStore
};

export const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
