import { createStore, compose, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './modules'
import orders from './modules/orders/reducer'
import users from './modules/users/reducer'

const rootReducer = combineReducers({
    orders: orders,
    users: users,
})

const sagaMiddleware = createSagaMiddleware()

const store = compose(
    applyMiddleware(sagaMiddleware),
    // window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store