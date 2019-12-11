import { all } from "redux-saga/effects";

import { sagas as authSagas } from "../redux/modules/Auth";
import { sagas as forumSagas } from "../redux/modules/Forum";


export default function *rootSaga() {
  yield all([
    authSagas(),
    forumSagas()
  ]);
}
