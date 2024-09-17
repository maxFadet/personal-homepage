import { call, put, delay, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchProjects, setProjects, setLoading, setError } from "./projectsSlice";
import { resources } from "../../../components/Resources/resources";

function* fetchProjectsSaga() {
  try {
    yield put(setLoading(true));
    yield put(setError(false));
    yield delay(1000);
    const response = yield call(axios.get, resources.githubAPI);
    yield put(setProjects(response.data));
  } catch (error) {
    yield put(setError(true));
  } finally {
    yield put(setLoading(false));
  }
}

export default function* watchFetchProjects() {
  yield takeLatest(fetchProjects.type, fetchProjectsSaga);
}