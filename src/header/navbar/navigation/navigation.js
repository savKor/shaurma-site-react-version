import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { ExitButton } from './exit/exit'
import { useContext, useEffect } from 'react'
import { createUserData } from '../../../storage/storage'
import { ContextUser } from '../../../App'

export function Navigation(props) {
  const { storageUser, setStorage } = useContext(ContextUser)
  const newStorage = createUserData(localStorage.getItem('token'))

  useEffect(() => {
    function getNewStorageInfo() {
      setStorage(newStorage)
    }

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
