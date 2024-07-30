import { all } from 'redux-saga/effects';
import watchFetchData from './components/ProjectsSection/ProjectsSaga';

export default function* rootSaga() {
    yield all([
        watchFetchData(),
    ]);
}