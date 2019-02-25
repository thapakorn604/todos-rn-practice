import { createStackNavigator } from 'react-navigation'

import MainScene from '../containers/MainSceneContainer'
import DetailScene from '../components/main-components/DetailScene'

export const MainStackNavigator = createStackNavigator ({
    Todos : {
        screen : MainScene,
        navigationOptions: () => ({
            header: null,
        })
    },
    Detail : {
        screen : DetailScene,
    },
},
{
    mode: 'card',
    headerMode: 'screen'
})