import { weather, geocode, getPosition } from '../helper/util'

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})

export const getWeather = weather => ({
  type: 'GET_WEATHER',
  payload: weather
})

export const getDataAsync = () => dispatch => {
  getPosition()
    .then(data => geocode(data.coords.latitude, data.coords.longitude))
    .then(({results}) => {
      console.log('Location:', results)
      let locale = results[0]
      dispatch(
        getLocation({
          name: locale.address_components[1].short_name
        })
      )
      weather(
        locale.geometry.location.lat,
        locale.geometry.location.lng
      )
      .then(data => dispatch(getWeather(data)))
    }
  )
}

export const getWeatherAsync = (lat, lng) => dispatch => {}
