import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { MainStackNavigator } from './MainStackNavigator'
import { ProfileStackNavigator } from './ProfileStackNavigator'

export const AppTabNavigator = createBottomTabNavigator({
    Todos : MainStackNavigator,
    Profile : ProfileStackNavigator,
},
{
    initialRouteName:"Todos",
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor : 'blue',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'white',
          height:50,
          paddingTop:8,
        },
    },
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let Icon = Ionicons;
          let iconName = "";
          if (routeName === 'Todos') {
            iconName = `ios-list`
          } else if (routeName === 'Profile') {
            iconName = `ios-contact`
            //iconName = `ios-add-circle${focused ? '' : '-outline'}`
          }
          return <Icon name={iconName} size={25} color={tintColor} />
        },
      }),
})