/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'
import { unix } from 'moment'
import Temperature from './temperature'
import PrecipProbability from './precipProbability'

let Weather = ({current, hour}) =>
  current ? <div>
    <Temperature temperature={current.temperature}></Temperature>
    {hour.data.map(hr =>
      <div key={hr.time}>
        <span>{unix(hr.time).format('ddd MM DD YY HH:mm')} </span>
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
