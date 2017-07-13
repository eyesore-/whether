// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'
import { getLocationAsync } from './actions/index'

const Button = ({name, lat, lng, handleClick}) => {
  console.log(name, lat, lng)
  return (
    <div>
      <button onClick={handleClick}>Locate!</button>
      <div>{name} {lat}{lng}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    name: state.name,
    lat: state.latitude,
    lng: state.longitude
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getLocationAsync()) }
})

const App = connect(mapStateToProps, mapDispatchToProps)(Button)

export default App
