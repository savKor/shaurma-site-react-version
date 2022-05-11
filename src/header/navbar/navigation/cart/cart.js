import { createContext, useContext, useState } from 'react'
import { ContextShaurmaList, ContextUser } from '../../../../App'
import { ModalCard } from './modal/modal'

export const ContextModalCart = createContext({
  storageUser: '',
  setStorage: () => {},
})

export function Cart(props) {
  const { shaurmaList } = useContext(ContextShaurmaList)
  const { storageUser } = useContext(ContextUser)
  const [modalIsOpen, setIsOpen] = useState(false)

  const modalStatus = { modalIsOpen, setIsOpen }

  function getInfoAboutCart(shaurmaList) {
    let numberOfShaurmaInCart = countShaurmaInCart(shaurmaList)
    let cartInfo

    if (storageUser.loggedIn === true) {
      cartInfo = `Корзина (${numberOfShaurmaInCart})`
    } else {
      cartInfo = `Корзина`
    }

    return cartInfo
  }

  function countShaurmaInCart(shaurmaList) {
    const shaurmaInCart = []
    for (let i = 0; i < shaurmaList.length; i++) {
      if (shaurmaList[i].inCart === true) {
        const shaurma = shaurmaList[i]
        shaurmaInCart.push(shaurma)
      }
    }

    return shaurmaInCart.length
  }

  function openModal() {
    setIsOpen(true)
  }

  let cartInfo = getInfoAboutCart(shaurmaList)

  return (
    <div>
      <button id="shop-cart" className="btn" onClick={openModal}>
        <svg id="cart-element" xmlns="http://www.w3.org/2000/svg" role="img">
          <title>Корзина</title>
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <strong id="cart-name" class="navbar-brand">
          {cartInfo}
        </strong>
      </button>
      <ContextModalCart.Provider value={modalStatus}>
        <ModalCard></ModalCard>
      </ContextModalCart.Provider>
    </div>
  )
}
