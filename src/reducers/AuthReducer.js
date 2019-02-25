import { UPDATE_STATUS } from '../constants/AuthConstant'

const INITIAL_STATE = {
    username: "Test", password: "test", isLoggedIn: false, 
    user: { firstName : "Thapakorn", lastName: "Oat", lastUpdate : "22 FEB 2019", },
}

function updateStatus(state, action){
    const oldState = Object.assign(state)
    var newState = { ...oldState, isLoggedIn : action.payload }
    return newState
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return updateStatus(state, action)
        default:
            return state
    }
}

export default AuthReducer