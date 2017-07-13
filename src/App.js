// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'

let App = ({dispatch}) => (
  <button>
    Hi
  </button>
)

App = connect()(App)

export default App
