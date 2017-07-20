// eslint-disable-next-line no-unused-vars
import React from 'react'
import moment, { unix } from 'moment'

const Time = ({timestamp}) =>
  <div>
    {unix(timestamp).date() === moment().date()
      ? unix(timestamp).format('hh:mm A')
      : unix(timestamp).format('ddd hh:mm A')
    }
  </div>

export default Time
