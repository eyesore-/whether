const GOOGLE_KEY = 'AIzaSyCziMqLH9SOOlx-xisQInYRQhzQT0sIGDc'
const SKY_KEY = 'eebe3600259ca09c03f6e33ad9e2c6e1'
const URI = {
  weather: `https://api.darksky.net/forecast/${SKY_KEY}`,
  weatherOps: 'exclude=minutely?flags&units=auto',
  geolocate: 'https://www.googleapis.com/geolocation/v1/geolocate?key=',
  geocode: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
  geocodeOps: '&result_type=postal_code',
  proxy: 'https://cors-anywhere.herokuapp.com/'
}

export const weather = (lat, lng) => {
  let requestURL = `${URI.proxy + URI.weather}/${lat},${lng}?${URI.weatherOps}`
  return fetch(requestURL)
    .then(res => res.json())
}

export const geocode = (lat, lng) => {
  let requestURL = `${URI.geocode}${lat},${lng}${URI.geocodeOps}&key=${GOOGLE_KEY}`
  return fetch(requestURL)
    .then(res => res.json())
}

const geolocate = () => {
  return fetch(`${URI.geolocate}${GOOGLE_KEY}`, { method: 'POST' })
    .then(res => res.json())
}

const getPosition = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

export const setLocalStorage = (object) => {
  for (let key in object) {
    localStorage.setItem(key, object[key])
  }
}

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    getPosition()
      .then(({coords}) => resolve(
        {
          lat: coords.latitude,
          lng: coords.longitude
        }))
      .catch(info => {
        geolocate()
          .then(({location}) => resolve(
            {
              lat: location.lat,
              lng: location.lng
            }
          ))
          .catch(error => reject(error))
      })
  })
}
