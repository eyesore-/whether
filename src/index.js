/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import weatherApp from './reducer/index'
import App from './App'
import { getLocationAsync } from './action/index'
import registerServiceWorker from './registerServiceWorker'
import './style.css'

let store = createStore(weatherApp, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(getLocationAsync())
registerServiceWorker()
