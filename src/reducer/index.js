import { combineReducers } from 'redux'
import weather from './weather'
import location from './location'

const weatherApp = combineReducers({ weather, location })

export default weatherApp
