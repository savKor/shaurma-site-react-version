import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { ExitButton } from './exit/exit'
import { useEffect, useState } from 'react'
import { createUserDataStorage, storage } from '../../../storage/storage'

export function Navigation(props) {
  const [storageUser, setStorage] = useState(storage.user)
  const newStorage = createUserDataStorage(localStorage.getItem('token'))

  console.log(newStorage)

  useEffect(() => {
    function getNewStorageInfo() {
      setStorage(newStorage)
    }
    debugger

    getNewStorageInfo()
  }, [newStorage.loggedIn])

  if (storageUser.loggedIn === true) {
    console.log(storageUser)
    return (
      <div className="col-4" id="option-elements">
        <Cart shaurmaList={props.shaurmaList} />
        <Nick username={storageUser.username} />
        <ExitButton />
      </div>
    )
  }
  return (
    <div className="col-4" id="option-elements">
      <Cart />
      <SignUpButton />
    </div>
  )
}
