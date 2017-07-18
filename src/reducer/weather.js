const weather = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      console.log(action)
      return {}
    default:
      return state
  }
}

export default weather
