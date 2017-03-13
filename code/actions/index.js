//log in user
export const loginInUser (username, password) => {
  return {
    type: 'LOG_IN_USER',
    username,
    password
  }
}

//change log in status
export const changePilotStatus () => {
  return {
    type: 'PILOT_STATUS'
  }
}
