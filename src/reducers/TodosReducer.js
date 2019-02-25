import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../constants/TodosConstant'
import { PURGE } from 'redux-persist';
import _ from 'lodash'

const INITIAL_STATE = [
    { key : 1, task : "Do laundry", status : false, detail : "100 buckets of clothes to do!" },
    { key : 2, task : "Do homework", status : false, detail : "Algorithms and Economics HW" },
    { key : 3, task : "Workout", status : false, detail : "Today is the weight training for abs" },
    { key : 4, task : "Buy stuffs", status : false, detail : "Eggs, Soysouce and Fish" },
    { key : 5, task : "Play game", status : false, detail : "Don't forget to do ROV's daily quest" },
    { key : 6, task : "Learn Swift", status : false, detail : null }
]

function addToDo(state, action) {
    const newState = Array.from(state) //= state for obj state
    const lastKey = _.last(newState).key
    newState.push({...action.payload, key : lastKey+1})
    return newState
}

function deleteToDo(state, action) {
        const oldState = Array.from(state)
        var newState = _.remove(oldState, item => item.key !== action.payload)
        return newState
}

function updateToDo(state, action){
        const { key,done } = action.payload
        const newState = Array.from(state)
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
        case PURGE:
            return INITIAL_STATE
        default:
            return state
    }
}

export default TodosReducer