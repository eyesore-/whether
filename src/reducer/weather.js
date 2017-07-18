const weather = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      console.log(action.payload)
      return {
        current: action.payload.currently,
        hour: action.payload.hourly,
        day: action.payload.daily
      }
    default:
      return state
  }
}

export default weather
