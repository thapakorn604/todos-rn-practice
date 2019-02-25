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
import { PersistGate } from 'redux-persist/integration/react'

import Router from './src/routers/RootRouter'
import Store from './src/store'

import Loading from './src/components/sub-components/LoadingScene'

const { store, persistor } = Store()


export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistor}>
          <Router/>
        </PersistGate>
      </Provider>      
    );
  }
}


