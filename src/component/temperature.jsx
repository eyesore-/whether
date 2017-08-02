// eslint-disable-next-line no-unused-vars
import React from 'react'

const Temperature = ({temperature}) =>
  <div
    className={`temp-${Math.floor(temperature / 10)}`}
    >{Math.round(temperature)}</div>

export default Temperature
