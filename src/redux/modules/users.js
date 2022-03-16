import { call, put, takeEvery } from 'redux-saga/effects'

// ACTIONS

export function getUsers() {
    return {
        type: 'GET_USERS_REQUESTED',
    }
}

export function clearUsers() {
    return {
        type: 'CLEAR_USERS_REQUESTED'
    }
}

// SAGAS

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

function* getUsersAction() {
    try {
        const users = yield call(getApi)
        yield put({ type: 'GET_USERS_SUCCESS', users: users })
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message })
    }
}

function* clearUsersAction() {
    try {
        yield put({ type: 'CLEAR_USERS_SUCCESS' })
    } catch (e) {
        yield put({ type: 'CLEAR_USERS_FAILED', message: 'Clear users failed' })
    }
}

export function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', getUsersAction)
    yield takeEvery('CLEAR_USERS_REQUESTED', clearUsersAction)
}

// REDUCER

const initialState = {
    users: [],
    loading: false,
    error: null,    
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USERS_REQUESTED':
            return {
                ...state,
                loading: true,
            }

        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.users,
            }

        case 'GET_USERS_FAILED':
            return {
                ...state,
                loading: false,
                error: action.message,
            }

        case 'CLEAR_USERS_SUCCESS':
            return {
                ...state,
                users: [],
            }

        case 'CLEAR_USERS_FAILED':
            return {
                ...state,
                error: action.message,
            }

        default:
            return state
    }
}