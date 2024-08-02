import { takeEvery, call, select } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectTheme, switchTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandler() {
    const darkMode = yield select(selectTheme);
    yield call(saveThemeInLocalStorage, darkMode);
}

export function* themeSaga() {
    yield takeEvery(switchTheme.type, saveThemeInLocalStorageHandler);
}