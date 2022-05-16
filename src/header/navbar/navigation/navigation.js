import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { ExitButton } from './exit/exit'
import { BackButton } from './back/back-button'
import { useUser } from '../../../hook'

export function Navigation(props) {
  const storageUser = useUser()

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
