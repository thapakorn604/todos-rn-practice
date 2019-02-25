import { createStackNavigator } from 'react-navigation'

import LoginScene from '../containers/LoginSceneContainer'

export const AuthStackNavigator = createStackNavigator({
    Login : {
        screen: LoginScene,
    }
},
{
    defaultNavigationOptions: () =>({
        header: null,
    })
})