import { createStackNavigator } from 'react-navigation'

import ProfileScene from '../containers/ProfileSceneContainer'

export const ProfileStackNavigator = createStackNavigator({
    Profile : {
        screen: ProfileScene,
    }
},
{
    defaultNavigationOptions: () =>({
        header: null,
    })
})