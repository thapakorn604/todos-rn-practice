import { UPDATE_STATUS } from '../constants/AuthConstant'

export const updateStatus = (isLoggedIn) => {
    return {
        type: UPDATE_STATUS,
        payload: isLoggedIn
    }
}