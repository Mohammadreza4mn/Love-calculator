import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getPercentageAPI } from '../api/Api';
import * as actionTypes from './action';

function* fetchPercentage(action) {

  try {
    const response = yield call(getPercentageAPI, action.payload.sName, action.payload.fName);

    yield put({ type: actionTypes.setSnackbar, payload: action.payload.fName + " & " + action.payload.sName + " " + response.result });
    yield put({ type: actionTypes.setResultCalculator, payload: response.data });
    yield put({ type: actionTypes.setLoading, payload: false });
    yield put({ type: actionTypes.percentageApiSucceed, payload: true });

  } catch (error) {

    yield put({ type: actionTypes.setLoading, payload: false });
    yield put({ type: actionTypes.percentageApiFailed, payload: true });
    yield put({ type: actionTypes.setSnackbar, payload: error.response.data.message });
  }
}

function* watching() {
  yield takeEvery(actionTypes.percentageApiRequest, fetchPercentage);
}

export default function* mySaga() {
  yield all([watching()])
}