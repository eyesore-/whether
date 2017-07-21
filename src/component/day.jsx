// eslint-disable-next-line no-unused-vars
import React from 'react'
import moment, { unix } from 'moment'

const Day = ({timestamp}) =>
  <div>
    {unix(timestamp).date() === moment().date()
      ? 'Today'
      : unix(timestamp).format('ddd')
    }
  </div>

export default Day
