import { parseJwt, userToken, checkUserLoggedIn } from '../api/token'

export const storage = {
  user: createUserDataStorage(userToken),
}

export function createUserDataStorage(userToken) {
  const loggedIn = checkUserLoggedIn(userToken)
  const userData = {
    token: userToken,
    username: loggedIn ? parseJwt(userToken).username : '',
    loggedIn,
  }
  return userData
}
