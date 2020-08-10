
import { FETCH_TODO_LIST_REQUEST, FETCH_TODO_LIST_SUCCESS, FETCH_TODO_LIST_FAILURE } from './todoTypes';
import axios from 'axios';

export const fetchTodoRequest = () => {
    return {
        type: FETCH_TODO_LIST_REQUEST
    }

}

 const fetchTodoSuccess = todos => {
    return {
        type: FETCH_TODO_LIST_SUCCESS,
        payload: todos
    }
}

 const fetchTodoFailure = error => {
    return {
        type: FETCH_TODO_LIST_FAILURE,
        payload: error
    }
}

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodoRequest)
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:7000/listTodo')
            .then(response => {
                const todos = response.data.todo
                dispatch(fetchTodoSuccess(todos))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchTodoFailure(errorMsg))
            })
    }
}