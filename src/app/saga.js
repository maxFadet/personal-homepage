import { all } from "redux-saga/effects";
import { themeSaga } from "../features/Homepage/Switcher/themeSaga";

export default function* saga() {
    yield all([

        themeSaga(),
    ]);
}