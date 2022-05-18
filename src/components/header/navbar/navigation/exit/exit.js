import { useDispatch } from 'react-redux'
import { fetchShaurma } from '../../../../../api/fetch-array'
import { deleteToken } from '../../../../../api/token'
import { updateStorageUser } from '../../../../../features/counter/counterSlice'
import { storage } from '../../../../../storage'
import { createUserData } from '../../../../../user-information'

export function ExitButton() {
  const dispatch = useDispatch()
  async function onExitClick() {
    deleteToken()
    dispatch(updateStorageUser(createUserData(localStorage.getItem('token'))))
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
