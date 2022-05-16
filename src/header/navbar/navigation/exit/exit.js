import { useContext } from 'react'
import { fetchShaurma } from '../../../../action/fetch-array'
import { deleteToken } from '../../../../action/token'
import { ContextShaurmaList } from '../../../../contex'
import { storage } from '../../../../contex/storage'
import { createUserData } from '../../../../user-information'

export function ExitButton() {
  const { setShaurmaList } = useContext(ContextShaurmaList)
  async function onExitClick() {
    deleteToken()
    storage.setValue(
      'storageUser',
      createUserData(localStorage.getItem('token')),
    )
    const shaurmaListFromServer = await fetchShaurma()
    setShaurmaList(shaurmaListFromServer)
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
