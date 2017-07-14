/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import location from './reducers/location'
import App from './App'
import { getLocationAsync } from './actions/index'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(location, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(getLocationAsync())
registerServiceWorker()
