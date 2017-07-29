/* eslint-disable no-unused-vars */
import React from 'react'
import Temperature from './temperature'
import Day from './day'

const DayForecast = ({days}) =>
  <div className="daily-forecast">
    {days.data.map(day =>
      <div className="day" key={day.time}>
        <Day timestamp={day.time}></Day>
        <div className="day-temp">
          <Temperature temperature={day.temperatureMax}></Temperature>
          <Temperature temperature={day.temperatureMin}></Temperature>
        </div>
      </div>
    )}
  </div>

export default DayForecast
