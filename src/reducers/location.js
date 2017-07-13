const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {}
    default:
      return state
  }
}

export default location
