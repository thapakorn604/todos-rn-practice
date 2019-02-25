import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants/TodosConstant'
import { PURGE } from 'redux-persist'

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const deleteTodo = (key) => {
    return {
        type: DELETE_TODO,
        payload: key
    }
}

export const updateTodo = (key, done) => {
    return {
        type: UPDATE_TODO,
        payload : {
            key, done
        }
    }
}

export const resetState = (key) => {
    return {
        type : PURGE,
        payload : key,
        result : () => {alert("RESET!!")}
    }
}