import {
  getUserLocation,
  geocode,
  weather,
  parseGeocode,
  setLocalStorage,
  shouldUpdate
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
      if (shouldUpdate(location.lat, location.lng)) {
        geocode(location.lat, location.lng)
        .then(({results}) => {
          let locality = parseGeocode(results[0].address_components)
          setLocalStorage({
            locality: JSON.stringify(locality),
            location: `${location.lat},${location.lng}`
          })
          dispatch(getLocation(locality))
        })
        weather(location.lat, location.lng)
        .then(data => {
          setLocalStorage({
            weather: JSON.stringify(data),
            updated: Date.now()
          })
          dispatch(getWeather(data))
        })
      } else {
        dispatch(getLocation(JSON.parse(localStorage.locality)))
        dispatch(getWeather(JSON.parse(localStorage.weather)))
      }
    })
}

export const getWeatherAsync = (lat, lng) => dispatch => {
  weather(lat, lng)
    .then(data => dispatch(getWeather(data)))
}
