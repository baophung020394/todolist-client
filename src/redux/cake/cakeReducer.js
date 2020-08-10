const { BUY_CAKE, FETCH_TEST_REQUEST, FETCH_TEST_SUCCESS } = require("./cakeTypes");

const initialState = {
    numOfCakes: 10,
    tests: [],
    error: ''
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }

        case FETCH_TEST_REQUEST: return {
            ...state,
            tests: action.payload,
            error: ''
        }
        
        default: return state
    }
}



export default cakeReducer