import { BUY_CAKE, FETCH_TEST_REQUEST, FETCH_TEST_SUCCESS, FETCH_TEST_FAILURE } from './cakeTypes';
import axios from 'axios';

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

export const fetchTestRequest = () => {
    return {
        type: FETCH_TEST_REQUEST
    }
}

export const fetchTestSuccess = tests => {
    return {
        type: FETCH_TEST_SUCCESS,
        payload: tests
    }
}

export const fetchTestFailure = error => {
    return {
        type: FETCH_TEST_FAILURE,
        payload: error
    }
}


export const fetchTest = () => {
    return function (dispatch) {
        dispatch(fetchTestRequest())
        axios
            .get('http://localhost:7000/test')
            .then(response => {
                console.log(response)
                response.json()
                // response.data is the users
                  const tests = response.data.map(test => test.testName)
                  dispatch(fetchTestSuccess(tests))
            })
            .catch(error => {
                // error.message is the error message
                  dispatch(fetchTestFailure(error.message))
            })
    }
}

