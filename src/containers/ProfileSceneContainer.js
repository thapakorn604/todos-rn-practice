import { connect } from 'react-redux'

import { saveUser } from '../actions/ProfileAction'
import ProfileScene from '../components/main-components/ProfileScene';

const mapStateToProps = state => {
    return {
        profile : state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveUser: (user) => {
            dispatch(saveUser(user))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScene)