// декодирование токена

export function parseJwt(token) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  )
  return JSON.parse(jsonPayload)
}

export let userToken = localStorage.getItem('token')

export function setToken(value) {
  localStorage.setItem('token', value)
  userToken = localStorage.getItem('token')
}

export function deleteToken() {
  localStorage.removeItem('token')
  userToken = localStorage.getItem('token')
}

export function checkUserLoggedIn(userToken) {
  return typeof userToken === 'string' && userToken !== '' && userToken !== null
}
