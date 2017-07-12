/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import location from './reducers/location'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(location)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
