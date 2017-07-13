// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { getLocationAsync } from './actions/index'

const Button = ({label, handleClick}) =>
  <button onClick={handleClick}>{label}</button>

const mapStateToProps = () => ({
  label: 'LOCATE!'
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getLocationAsync()) }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Button)

export default App
