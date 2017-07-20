/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import Temperature from './temperature'
import HourForecast from './hourForecast'
import DayForecast from './dayForecast'

let Weather = ({current, hours, days}) =>
  current ? <div>
    <Temperature temperature={current.temperature}></Temperature>
    <HourForecast hours={hours}></HourForecast>
    <DayForecast days={days}></DayForecast>
  </div> : <div></div>

const mapStateToProps = state => {
  return state.weather
}

Weather = connect(mapStateToProps)(Weather)

export default Weather
