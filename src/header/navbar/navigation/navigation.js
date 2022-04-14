import { Cart } from './cart/cart'
import { Nick } from './nickname/nickname'
import { SignUpButton } from './sing-up/sign-up'
import { createStorage } from '../../../storage/storage'
import { ExitButton } from './exit/exit'

export function Navigation(props) {
  const storage = createStorage()
  if (storage.user.loggedIn === true) {
    console.log(storage.user)
    return (
      <div className="col-4" id="option-elements">
        <Cart shaurmaList={props.shaurmaList} />
        <Nick username={storage.user.username} />
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
