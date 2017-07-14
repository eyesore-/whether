// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { getLocationAsync } from './actions/index'

const Button = ({name, handleClick}) => {
  return (
    <div>
      <button onClick={handleClick}>Locate!</button>
      <div>{name}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getLocationAsync()) }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Button)

export default App
