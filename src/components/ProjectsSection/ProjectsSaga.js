import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './projectsSlice';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://api.github.com/users/maxFadet/repos');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* watchFetchData() {
  yield takeLatest(fetchDataRequest.type, fetchDataSaga);
}
