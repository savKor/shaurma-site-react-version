import { API_URL } from './config'
import { getHeader } from './header'

export async function fetchShaurma() {
  const response = await fetch(`${API_URL}shaurma-list`, {
    method: 'GET',
    headers: getHeader(),
  })

  const commits = await response.json()

  const result = await commits
  debugger
  return result
}

export async function deleteShaurmaFromMain(data) {
  const rawResponse = await fetch(`${API_URL}shaurma-list/deleted`, {
    method: 'POST',
    headers: getHeader(),
    body: JSON.stringify(data),
  })

  const payload = await rawResponse.json()

  console.log(payload)

  return payload
}
