import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants/TodosConstant'
import _ from 'lodash'

const INITIAL_STATE = [
    { key : 1, task : "Do laundry", done : false },
    { key : 2, task : "Do homework", done : false },
    { key : 3, task : "Workout", done : false },
    { key : 4, task : "Buy stuffs", done : false },
    { key : 5, task : "Play game", done : false },
    { key : 6, task : "Learn Swift", done : false}
]

function addToDo(state, action) {
    const newState = Array.from(state); //= state for obj state
    const lastKey = _.last(newState).key
    newState.push({...action.payload, key : lastKey+1})
    return newState
}

function deleteToDo(state, action) {
        const oldState = Array.from(state);
        var newState = _.remove(oldState, item => item.key !== action.payload)
        return newState
}

function updateToDo(state, action){
        const { key,done } = action.payload
        const newState = Array.from(state);
        const index = _.findIndex(newState, task => task.key === key)
        const oldObject = newState[index]
        newState.splice(index, 1, { ...oldObject, done })
        return newState
}

const TodosReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return addToDo(state, action)
        case DELETE_TODO:
            return deleteToDo(state, action)
        case UPDATE_TODO: 
            return updateToDo(state, action)
        default:
            return state
    }
}

export default TodosReducer