import { combineReducers } from 'redux'

import TodosReducer from './TodosReducer'
import AuthReducer from './AuthReducer'
import ProfileReducer from './ProfileReducer'

const reducers = {
    todos: TodosReducer,
    auth: AuthReducer,
    profile: ProfileReducer,
}

export default combineReducers(reducers)