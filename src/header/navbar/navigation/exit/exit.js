import { useContext } from 'react'
import { fetchShaurma } from '../../../../api/fetch-array'
import { deleteToken } from '../../../../api/token'
import { ContextShaurmaList, ContextUser } from '../../../../App'
import { createUserData } from '../../../../storage/storage'

export function ExitButton() {
  const { setShaurmaList } = useContext(ContextShaurmaList)
  const { storageUser, setStorage } = useContext(ContextUser)

  async function onExitClick() {
    deleteToken()
    setStorage(createUserData(localStorage.getItem('token')))
    const shaurmaFromServer = await fetchShaurma()
    setShaurmaList(shaurmaFromServer)
    debugger
    console.log(storageUser)
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
