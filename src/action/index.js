import { getUserLocation, geocode, weather } from '../helper/util'

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
          console.log('Location:', results)
          let locale = results[0]
          dispatch(
            getLocation({
              name: locale.address_components[1].short_name
            })
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
