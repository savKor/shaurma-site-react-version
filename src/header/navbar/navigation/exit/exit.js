import { useContext } from 'react'
import { createUserData } from '../../../../storage/storage'
import { Context } from '../../navbar'

export function ExitButton() {
  const { storageUser, setStorage } = useContext(Context)

  function onExitClick() {
    localStorage.removeItem('token')
    setStorage(createUserData(localStorage.getItem('token')))
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
