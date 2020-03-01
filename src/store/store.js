import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { reducer } from "./reducers"
import { watchSignUpPending } from "./sagas"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(watchSignUpPending)
