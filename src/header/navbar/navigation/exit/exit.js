import { useContext } from 'react'
import { fetchShaurma } from '../../../../action/fetch-array'
import { deleteToken } from '../../../../action/token'
import { ContextShaurmaList, ContextUser } from '../../../../contex'
import { createUserData } from '../../../../storage/storage'

export function ExitButton() {
  const { setShaurmaList } = useContext(ContextShaurmaList)
  //const [storageUser, setStorage] = useState(storage.user)
  const { setStorage } = useContext(ContextUser)

  async function onExitClick() {
    deleteToken()
    setStorage(createUserData(localStorage.getItem('token')))
    const shaurmaFromServer = await fetchShaurma()
    setShaurmaList(shaurmaFromServer)
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
