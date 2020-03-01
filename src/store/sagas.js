import { takeEvery, put, call } from "redux-saga/effects"
import { SIGN_UP_PENDING, signUpSuccess } from "./actions"

function fetchSignUp(data) {
  fetch("https://note-maker-28d08.firebaseio.com/users.json", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data)
  })
}

function* workerSignUp(data) {
  yield call(fetchSignUp, data.payload)
  yield put(signUpSuccess())
}

export function* watchSignUpPending() {
  yield takeEvery(SIGN_UP_PENDING, workerSignUp)
}
