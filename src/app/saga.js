import { all } from 'redux-saga/effects';
import watchFetchProjects from '../features/Homepage/ProjectsSection/ProjectsSaga';
import { themeSaga } from '../features/Homepage/Switcher/themeSaga';

export default function* saga() {
    yield all([
        watchFetchProjects(),
        themeSaga(),
    ]);
}