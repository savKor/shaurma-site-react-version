import { Cart } from './cart/cart'
import { SignUpButton } from './sing-up/sign-up'

export function Navigation() {
  return (
    <div className="col-4" id="option-elements">
      <Cart />
      <SignUpButton />
    </div>
  )
}
