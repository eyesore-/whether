// eslint-disable-next-line no-unused-vars
import React from 'react'

const PrecipProbability = ({chanceOfPrecip}) =>
  <div>
    {chanceOfPrecip ? `${Math.round(chanceOfPrecip * 100)}%` : ''}
  </div>

export default PrecipProbability
