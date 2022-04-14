import { parseJwt, userToken, checkUserLoggedIn } from '../api/token'

const loggedIn = checkUserLoggedIn()

const userData = {
  token: userToken,
  username: loggedIn ? parseJwt(userToken).username : '',
  loggedIn,
}

export const storage = {
  user: userData,
}

export function createStorage() {
  const loggedIn = checkUserLoggedIn()

  const userData = {
    token: userToken,
    username: loggedIn ? parseJwt(userToken).username : '',
    loggedIn,
  }
  const storage = {
    user: userData,
  }
  return storage
}
