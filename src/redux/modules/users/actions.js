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