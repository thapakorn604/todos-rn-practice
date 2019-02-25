import { SAVE_USER } from '../constants/ProfileConstant'

export const saveUser = (user) => {
    return {
        type : SAVE_USER,
        payload : user
    }  
}