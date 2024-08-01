import { all } from 'redux-saga/effects';
import watchFetchData from './components/ProjectsSection/ProjectsSaga';
import { themeSaga } from './components/Header/Switcher/themeSaga';

export default function* saga() {
    yield all([
        watchFetchData(),
        themeSaga(),
    ]);
}