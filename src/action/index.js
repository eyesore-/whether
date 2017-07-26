import {
  getUserLocation,
  geocode,
  weather,
  parseGeocode,
  setLocalStorage
} from '../helper/util'

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})

export const getWeather = weather => ({
  type: 'GET_WEATHER',
  payload: weather
})

// TODO trim down function
export const getDataAsync = () => dispatch => {
  getUserLocation()
    .then(location => {
      geocode(location.lat, location.lng)
        .then(({results}) => {
          dispatch(
            getLocation(parseGeocode(results[0].address_components))
          )
        })
      let lastUpdate = localStorage.updated
        ? JSON.parse(localStorage.updated) : undefined
      if (!lastUpdate || Date.now() > lastUpdate + 6e5) {
        return weather(location.lat, location.lng)
          .then(data => {
            setLocalStorage({
              weather: JSON.stringify(data),
              updated: Date.now()
            })
            dispatch(getWeather(data))
          })
      }
      dispatch(getWeather(JSON.parse(localStorage.weather)))
    })
}

export const getWeatherAsync = (lat, lng) => dispatch => {
  weather(lat, lng)
    .then(data => dispatch(getWeather(data)))
}
