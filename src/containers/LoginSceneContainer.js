import { connect } from 'react-redux'

import LoginScene from '../components/main-components/LoginScene'

import { updateStatus } from '../actions/AuthAction'
import { saveUser } from '../actions/ProfileAction'

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: (isLoggedIn) => {
            dispatch(updateStatus(isLoggedIn))
        },
        saveUser: (user) => {
            dispatch(saveUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScene)
