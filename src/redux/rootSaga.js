import { all } from "redux-saga/effects";

import { sagas as authSagas } from "../redux/modules/Auth";


export default function *rootSaga() {
    yield all([
        authSagas(),
    ]);
}
