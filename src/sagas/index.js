import { put, spawn, takeEvery } from "redux-saga/effects";
import API from "../api";
import {
  serviceListRequest,
  serviceListFailure,
  serviceListSuccess,
} from "../slices/serviceListSlice";
import {
  serviceRequest,
  serviceFailure,
  serviceSuccess,
} from "../slices/serviceSlice";

// watcher
function* watchServiceList() {
  yield takeEvery(serviceListRequest, workerServiceListSaga);
}
function* watchService() {
  yield takeEvery(serviceRequest, workerServiceSaga);
}
// worker
function* workerServiceListSaga() {
  try {
    const payload = yield API.getSkills();
    yield put(serviceListSuccess(payload));
  } catch (e) {
    yield put(serviceListFailure(e.message));
  }
}
function* workerServiceSaga(action) {
  try {
    const payload = yield API.getSkillsById(action.payload);
    yield put(serviceSuccess(payload));
  } catch (e) {
    yield put(serviceFailure(e.message));
  }
}
export default function* saga() {
  yield spawn(watchServiceList);
  yield spawn(watchService);
}
