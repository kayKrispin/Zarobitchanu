import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { store as modalStore } from "./modules/Modal";
import { store as forumStore } from "./modules/Forum";
import { store as authStore } from "./modules/Auth";
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  authStore,
  forumStore,
  modalStore
};

export const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
