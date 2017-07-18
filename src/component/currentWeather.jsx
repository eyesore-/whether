// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'

let Weather = ({current}) =>
  <div>{current ? Math.round(current.temperature) : ''}</div>

const mapStateToProps = state => {
  return state.weather
}

Weather = connect(mapStateToProps)(Weather)

export default Weather
