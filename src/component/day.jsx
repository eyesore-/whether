// eslint-disable-next-line no-unused-vars
import React from 'react'
import { unix } from 'moment'

const Day = ({timestamp}) =>
  <div>{unix(timestamp).format('ddd')}</div>

export default Day
