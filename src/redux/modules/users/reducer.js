const initialState = {
    users: [],
    loading: false,
    error: null,    
}

export default function users(state = initialState, action) {
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