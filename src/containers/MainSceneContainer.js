import { connect } from 'react-redux'

import MainScene from '../components/main-components/MainScene'

import { addTodo, deleteTodo, updateTodo, resetState } from '../actions/TodosAction'


const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (index) => {
            dispatch(deleteTodo(index))
        },
        addTodo: (task) => {
            dispatch(addTodo(task))
        },
        updateTodo: (index, done) => { 
            dispatch(updateTodo(index, done))
        },
        resetState: () => {
            dispatch(resetState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScene)
