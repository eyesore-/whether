/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import Temperature from './temperature'
import PrecipProbability from './precipProbability'
import Time from './time'

let Weather = ({current, hour}) =>
  current ? <div>
    <Temperature temperature={current.temperature}></Temperature>
    {hour.data.map(hr =>
      <div key={hr.time}>
        <Time timestamp={hr.time}></Time>
        <Temperature temperature={hr.temperature}></Temperature>
        <PrecipProbability chanceOfPrecip={hr.precipProbability}>
        </PrecipProbability>
      </div>
    )}
  </div> : <div></div>

const mapStateToProps = state => {
  return state.weather
}

Weather = connect(mapStateToProps)(Weather)

export default Weather
