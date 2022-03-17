const initialState = {
    orders: [1,2,3,4],
    loading: false,
    error: null,    
}

export default function orders(state = initialState, action) {
    switch (action.type) {
        case 'CLEAR_USERS_SUCCESS':
            return {
                ...state,
                orders: [],
            }

        default:
            return state
    }
}