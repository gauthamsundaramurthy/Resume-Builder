import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/index'

const loggerMiddleWare = createLogger()

export const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleWare
  )
)
