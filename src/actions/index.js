const GOOGLE_KEY = 'AIzaSyCziMqLH9SOOlx-xisQInYRQhzQT0sIGDc'
const SKY_KEY = 'eebe3600259ca09c03f6e33ad9e2c6e1'
const URI = {
  weather: `https://api.darksky.net/forecast/${SKY_KEY}/`,
  weatherOps: 'exclude=minutely?flags&units=auto',
  geolocate: 'https://www.googleapis.com/geolocation/v1/geolocate?key=',
  geocode: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
  geocodeOps: '&result_type=postal_code',
  proxy: 'https://cors-anywhere.herokuapp.com/'
}

const weather = (lat, lng) => {
  let requestURL = `${URI.proxy + URI.weather}/${lat},${lng}?${URI.weatherOps}`
  return fetch(requestURL).then(res => res.json())
}

const geocode = (lat, lng) => {
  let requestURL = `${URI.geocode}${lat},${lng}${URI.geocodeOps}&key=${GOOGLE_KEY}`
  return fetch(requestURL).then(res => res.json())
}

const geolocate = () => {
  return fetch(`${URI.geolocate}${GOOGLE_KEY}`, { method: 'POST' })
    .then(res => res.json())
    .then(data => geocode(data.location.lat, data.location.lng))
}

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})

export const getLocationAsync = () => dispatch => {
  return geolocate().then(data => {
    let locale = data.results[0]
    dispatch(
      getLocation({
        name: locale.address_components[1].short_name,
        latitude: locale.geometry.location.lat,
        longitude: locale.geometry.location.lng
      })
    )
  })
}
