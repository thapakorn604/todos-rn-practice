/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'

import RootReducer from './src/reducers/RootReducer'
import MainScene from './src/containers/MainSceneContainer'

const store = createStore(RootReducer, applyMiddleware(logger))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScene/>
      </Provider>      
    );
  }
}


