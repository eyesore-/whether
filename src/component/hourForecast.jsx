/* eslint-disable no-unused-vars */
import React from 'react'
import Temperature from './temperature'
import PrecipProbability from './precipProbability'
import Time from './time'

const HourForecast = ({hours}) =>
  <div className="hourly-forecast">
    {hours.data.map(hour =>
      <div className="hour" key={hour.time}>
        <Time timestamp={hour.time}></Time>
        <Temperature temperature={hour.temperature}></Temperature>
        <PrecipProbability chanceOfPrecip={hour.precipProbability}>
        </PrecipProbability>
        <span>{hour.summary}</span>
      </div>
    )}
  </div>

export default HourForecast
