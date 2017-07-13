const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {
        location: action.payload.short_name
      }
    default:
      return state
  }
}

export default location
