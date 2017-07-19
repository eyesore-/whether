/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { unix } from 'moment'
import Temperature from './temperature.jsx'

let Weather = ({current, hour}) =>
  current ? <div>
    <div>{Math.round(current.temperature)}</div>
    {hour.data.map(hr =>
      <div key={hr.time}>
        <span>{unix(hr.time).format('ddd MM DD YY HH:mm')} </span>
        <Temperature temperature={hr.temperature}></Temperature>
        <span>{`${Math.round(hr.precipProbability * 100)}%`}</span>
      </div>
    )}
  </div> : <div></div>

const mapStateToProps = state => {
  return state.weather
}

Weather = connect(mapStateToProps)(Weather)

export default Weather
