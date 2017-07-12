// eslint-disable-next-line no-unused-vars
import React from 'react'

let API_KEY = 'AIzaSyCziMqLH9SOOlx-xisQInYRQhzQT0sIGDc'
let uri = 'https://www.googleapis.com/geolocation/v1/geolocate?key='

let getGeocode = (lat, lng) => {
  let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
  fetch(`${url}${lat},${lng}&key=${API_KEY}`, {method: 'GET'})
    .then(res => res.json())
    .then(data => console.log('YOU ARE', data))
}

function success (position) {
  getGeocode(
    position.coords.latitude,
    position.coords.longitude
  )
}

function error (error) {
  console.error(error)
  fetch(`${uri}${API_KEY}`, {method: 'POST'})
    .then(res => res.json())
    .then(data => getGeocode(data.location.lat, data.location.lng))
}

navigator.geolocation.getCurrentPosition(success, error)

const App = () => (
  <div>
    hi
  </div>
)

export default App
