import { parseJwt, userToken, checkUserLoggedIn } from '../action/token'

export const storageUserFullInfo = {
  user: createUserData(userToken),
}

export function createUserData(userToken) {
  debugger
  const loggedIn = checkUserLoggedIn(userToken)
  const userData = {
    token: userToken,
    username: loggedIn ? parseJwt(userToken).username : '',
    loggedIn,
  }
  return userData
}
