import { ModalCard } from './modal'
import { getShaurma } from '../../../../../action'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectState,
  updateModalStatus,
  updateShaurmaList,
} from '../../../../../features/counter/storageSlice'
import { useEffect } from 'react'

export function Cart() {
  const dispatch = useDispatch()
  const store = useSelector(selectState)
  const storageUser = store.storageUser
  const shaurmaList = store.shaurmaList

  async function setData() {
    const dataFromServer = await getShaurma()
    dispatch(updateShaurmaList(dataFromServer))
  }

  useEffect(() => {
    setData()
  }, [])

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
    dispatch(updateModalStatus(true))
  }

  if (shaurmaList !== undefined) {
    let cartInfo = getInfoAboutCart(shaurmaList)

    return (
      <div>
        <button
          id="shop-cart"
          className=" btn btn-sm btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
          onClick={openModal}
        >
          <svg id="cart-element" xmlns="http://www.w3.org/2000/svg" role="img">
            <title>Корзина</title>
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <strong id="cart-name" class="">
            {cartInfo}
          </strong>
        </button>
        <ModalCard shaurmaList={shaurmaList}></ModalCard>
      </div>
    )
  }

  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
