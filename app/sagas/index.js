import { all, takeLatest } from "redux-saga/effects"

// Redux files
import { PlaygroundTypes } from "../redux/playground"
// Saga files
import { playgroundTestSaga } from "./playground"

import API from "../utils/api"

const api = API.create()

export default function* rootSaga() {
	yield all([takeLatest(PlaygroundTypes.PLAYGROUND1, playgroundTestSaga, api)])
}
