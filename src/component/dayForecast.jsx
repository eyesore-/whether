/* eslint-disable no-unused-vars */
import React from 'react'
import Temperature from './temperature'
import Day from './day'

const DayForecast = ({days}) =>
  <div className="hourly-forecast">
    {days.data.map(day =>
      <div className="hour" key={day.time}>
        <Day timestamp={day.time}></Day>
        <Temperature temperature={day.temperatureMax}></Temperature>
        <Temperature temperature={day.temperatureMin}></Temperature>
      </div>
    )}
  </div>

export default DayForecast
