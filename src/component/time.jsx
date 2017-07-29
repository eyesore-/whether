// eslint-disable-next-line no-unused-vars
import React from 'react'
import { unix } from 'moment'

const Time = ({timestamp}) =>
  <div>
    { unix(timestamp).format('hh:mm A') }
  </div>

export default Time
