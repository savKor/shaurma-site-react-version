import { Modal } from './modal/modal'

export function Cart(props) {
  return (
    <div>
      <button
        id="shop-cart"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
      >
        <svg id="cart-element" xmlns="http://www.w3.org/2000/svg" role="img">
          <title>Корзина</title>
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>
      <Modal></Modal>
    </div>
  )
}

/** 
export function CartButton(props) {
  const numberOfShaurmaInCart = countShaurmaInCart(shaurmaList)
  const cartNameAndStatus = createStatusOfCart(numberOfShaurmaInCart)
  const modal = createModal(shaurmaList)
  const attribute = createButtonAttribute()
  const cartHTML =  html  `
        <button id="shop-cart" class="btn" ${attribute}>
            <svg id="cart-element" xmlns="http://www.w3.org/2000/svg" role="img">
                <title>Корзина</title>
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <strong id="cart-name"class="navbar-brand">${cartNameAndStatus}</strong>
        </button>
        ${modal}
    `
  return cartHTML
}
*/
