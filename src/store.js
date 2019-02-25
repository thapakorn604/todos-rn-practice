import { createStore,applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' //localStorage for React.js, AsyncStorage for RN

import RootReducer from '../src/reducers/RootReducer'

const persistConfig = {
  key: 'root',
  storage : storage,
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export default () => {
  let store = createStore(persistedReducer,applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}