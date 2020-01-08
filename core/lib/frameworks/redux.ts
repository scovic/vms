import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { visitRecordReducer, rootSaga } from '../adapters'

const rootReducer = {
  visitRecords: visitRecordReducer
}

export const configureStore = () => {
  const middleware = []
  const sagaMiddleware = createSagaMiddleware()

  middleware.push(sagaMiddleware)

  const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(...middleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
