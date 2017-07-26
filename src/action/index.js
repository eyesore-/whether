import {
  getUserLocation,
  geocode,
  weather,
  parseGeocode
} from '../helper/util'

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})

export const getWeather = weather => ({
  type: 'GET_WEATHER',
  payload: weather
})

export const getDataAsync = () => dispatch => {
  getUserLocation()
    .then(location => {
      geocode(location.lat, location.lng)
        .then(({results}) => {
          dispatch(
            getLocation(parseGeocode(results[0].address_components))
          )
        })
      weather(location.lat, location.lng)
        .then(data => dispatch(getWeather(data)))
    })
}

export const getWeatherAsync = (lat, lng) => dispatch => {
  weather(lat, lng)
    .then(data => dispatch(getWeather(data)))
}
