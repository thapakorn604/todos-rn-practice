import { connect } from 'react-redux'

import MainScene from '../components/MainScene'

import { addTodo, deleteTodo, updateTodo } from '../actions/TodosAction'


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
            console.log(JSON.stringify(task))
            dispatch(addTodo(task))
        },
        updateTodo: (index, done) => { 
            dispatch(updateTodo(index, done))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScene)
