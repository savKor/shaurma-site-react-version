import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { ExitButton } from './exit/exit'
import { BackButton } from './back/back-button'
import { useStorageData } from '../../../../hook'
import { storage } from '../../../../storage'

export function Navigation(props) {
  const storageUser = useStorageData(storage.data.storageUser, 'storageUser')

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
