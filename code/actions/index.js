//log in user
const logInUser = () => {
  return {
    type: 'LOG_IN_USER',
  }
}
//log out user
const logOutUser = () => {
  return {
    type: 'LOG_OUT_USER',
  }
}
// logout: () => dispatch({ type: 'Logout' }),
// login: () => dispatch({ type: 'Login' }),

//change log in status
const changePilotStatus = () => {
  return {
    type: 'PILOT_STATUS'
  }
}

const changeAirSpaceStatus = () => {
  return {
    type: 'AIR_SPACE_STATUS'
  }
}

export default { logInUser, logOutUser, changePilotStatus, changeAirSpaceStatus };
