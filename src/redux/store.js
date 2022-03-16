import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './modules'
import { reducer as usersReducer } from './modules/users'

const rootReducer = combineReducers({
    users: usersReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = compose(
    applyMiddleware(sagaMiddleware),
    // window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store