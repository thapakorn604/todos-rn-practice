import { combineReducers } from 'redux'

import TodosReducer from './TodosReducer'

const reducers = {
    todos: TodosReducer
}

export default combineReducers(reducers)