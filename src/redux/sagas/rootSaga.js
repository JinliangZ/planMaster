import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { SIGNUP_SUCCESS } from "../ducks/user";

//watcher saga
export function* watcherSaga() {
    yield takeLatest(SIGNUP_SUCCESS, handleGetUser);
  }