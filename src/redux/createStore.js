import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { store as modalStore } from './modules/Modal';

const sagaMiddleware = createSagaMiddleware();


const reducers = {
  modalStore
};

export const store  = createStore(
  combineReducers( { ...reducers } ),
  composeWithDevTools(applyMiddleware(sagaMiddleware,logger))
);
