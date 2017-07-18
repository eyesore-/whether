// eslint-disable-next-line no-unused-vars
import React from 'react'
import { connect } from 'react-redux'

let Weather = ({current, hour}) =>
  current ? <div>
    <div>{Math.round(current.temperature)}</div>
    {hour.data.map(hr =>
      <div key={hr.time}>
        <span>{hr.time}</span> <span>{Math.round(hr.temperature)}</span>
      </div>
    )}
  </div> : <div></div>

const mapStateToProps = state => {
  return state.weather
}

Weather = connect(mapStateToProps)(Weather)

export default Weather
