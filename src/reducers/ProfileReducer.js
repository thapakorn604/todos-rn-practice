import { SAVE_USER } from '../constants/ProfileConstant'

INITIAL_STATE = {}

function saveUser(state, action){
    var newState = Object.assign(state)
    newState = action.payload
    return newState
}

const ProfileReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_USER:
            return saveUser(state, action)
        default:
            return state
    }
}

export default ProfileReducer