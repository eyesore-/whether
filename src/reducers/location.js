const location = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      console.log(action)
      return state
    default:
      return state
  }
}

export default location
