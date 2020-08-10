const { FETCH_TODO_LIST_REQUEST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE } = require("./todoTypes")


const initialState = {
    loading: false,
    todos: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODO_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TODO_LIST_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                error: ''
            }
        case FETCH_TODO_LIST_FAILURE:
            return {
                ...state,
                todos: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer