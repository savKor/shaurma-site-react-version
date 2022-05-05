import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { ExitButton } from './exit/exit'
import { useContext, useEffect } from 'react'
import { createUserData } from '../../../storage/storage'
import { ContextUser } from '../../../App'
import { BackButton } from './back/back-button'

export function Navigation(props) {
  const { storageUser, setStorage } = useContext(ContextUser)

  if (props.pageOrder === false) {
    if (storageUser.loggedIn === true) {
      console.log(storageUser)
      return (
        <div className="col-4" id="option-elements">
          <Cart />
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
  return (
    <div className="col-4" id="option-elements">
      <BackButton />
    </div>
  )
}
