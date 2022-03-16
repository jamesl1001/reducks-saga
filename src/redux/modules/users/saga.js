import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
    .catch((error) => {throw error})
}

function* getUsers() {
    try {
        const users = yield call(getApi)
        yield put({ type: 'GET_USERS_SUCCESS', users: users })
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message })
    }
}

function* clearUsers() {
    try {
        yield put({ type: 'CLEAR_USERS_SUCCESS' })
    } catch (e) {
        yield put({ type: 'CLEAR_USERS_FAILED', message: 'Clear users failed' })
    }
}

function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', getUsers)
    yield takeEvery('CLEAR_USERS_REQUESTED', clearUsers)
}

export default userSaga