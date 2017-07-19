// eslint-disable-next-line no-unused-vars
import React from 'react'

const PrecipProbability = ({chanceOfPrecip}) =>
  <span>
    {chanceOfPrecip ? `${Math.round(chanceOfPrecip * 100)}%` : ''}
  </span>

export default PrecipProbability
