let API_KEY = 'AIzaSyCziMqLH9SOOlx-xisQInYRQhzQT0sIGDc'
const URI = {
  geolocate: 'https://www.googleapis.com/geolocation/v1/geolocate?key=',
  geocode: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
}

let geocode = (lat, lng) => {
  return fetch(`${URI.geocode}${lat},${lng}&key=${API_KEY}`,
    {method: 'GET'})
    .then(res => res.json())
}

const geolocate = () => {
  return fetch(`${URI.geolocate}${API_KEY}`, {method: 'POST'})
    .then(res => res.json())
    .then(data => geocode(data.location.lat, data.location.lng))
}

export const getLocation = location => ({
  type: 'GET_LOCATION',
  payload: location
})
