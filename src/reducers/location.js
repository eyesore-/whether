const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {
        name: action.payload.name,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude
      }
    default:
      return state
  }
}

export default location
