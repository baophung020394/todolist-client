import React , {useEffect} from 'react'
import { fetchTodos } from '../redux'
import { connect } from 'react-redux'

function TodoList({ todoData, fetchTodos }) {
    console.log(todoData)
    useEffect(() => {
        fetchTodos()
    }, [])
    return todoData.loading ? (
        <h2>Loading</h2>
    ) : todoData.error ? (
    <h2>{todoData.error}</h2>
    ) : (
        <div>

            <h2>Todo List </h2>
            <div>
                {todoData && 
                    todoData.todos &&
                    todoData.todos.map(t => <p>{t.todoName}</p>)
                }
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        todoData: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
