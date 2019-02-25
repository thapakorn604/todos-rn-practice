import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import { AuthStackNavigator } from './AuthStackNavigator'
import { AppTabNavigator } from './AppTabNavigator'

const SwitchNavigator = createSwitchNavigator({
    Auth : AuthStackNavigator,
    App : AppTabNavigator,
})

const RootNavigator = createAppContainer(SwitchNavigator)

export default RootNavigator