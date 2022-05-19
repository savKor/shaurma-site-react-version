import { useDispatch } from 'react-redux'
import { fetchShaurma } from '../../../../../api/fetch-array'
import { deleteToken } from '../../../../../api/token'
import {
  updateShaurmaList,
  updateStorageUser,
} from '../../../../../features/counter/storageSlice'
import { createUserData } from '../../../../../user-information'

export function ExitButton() {
  const dispatch = useDispatch()

  async function onExitClick() {
    deleteToken()
    dispatch(updateStorageUser(createUserData(localStorage.getItem('token'))))
    const shaurmaListFromServer = await fetchShaurma()
    dispatch(updateShaurmaList(shaurmaListFromServer))
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
