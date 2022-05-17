import { fetchShaurma } from '../../../../../api/fetch-array'
import { deleteToken } from '../../../../../api/token'
import { storage } from '../../../../../storage'
import { createUserData } from '../../../../../user-information'

export function ExitButton() {
  async function onExitClick() {
    deleteToken()
    storage.setValue(
      'storageUser',
      createUserData(localStorage.getItem('token')),
    )
    const shaurmaListFromServer = await fetchShaurma()
    storage.setValue('shaurmaList', shaurmaListFromServer)
  }

  return (
    <button
      id="exit-button"
      type="button"
      className="btn btn-sm btn-outline-secondary"
      onClick={onExitClick}
    >
      Exit
    </button>
  )
}
