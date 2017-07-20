const weather = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      console.log(action.payload)
      return {
        current: action.payload.currently,
        hours: action.payload.hourly,
        days: action.payload.daily
      }
    default:
      return state
  }
}

export default weather
