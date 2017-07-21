import { geolocate, weather } from '../helper/util'

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})

export const getWeather = weather => ({
  type: 'GET_WEATHER',
  payload: weather
})

export const getDataAsync = () => dispatch => {
  geolocate().then(data => {
    let locale = data.results[0]
    dispatch(
      getLocation({
        name: locale.address_components[1].short_name,
        latitude: locale.geometry.location.lat,
        longitude: locale.geometry.location.lng
      })
    )
    weather(
      locale.geometry.location.lat,
      locale.geometry.location.lng)
      .then(data => dispatch(getWeather(data)))
  })
}

export const getWeatherAsync = (lat, lng) => dispatch => {}
