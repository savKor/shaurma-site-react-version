import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextShaurmaList, ContextUser } from '../../../../../App'
import Modal from 'react-modal'
import { ListOfCards } from './shaurma-in-cart/shaurma-list-in-cart'
import { ContextModalCart } from '../cart'
import { fetchShaurma } from '../../../../../api/fetch-array'

export function ModalCard() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const { storageUser } = useContext(ContextUser)
  const { modalIsOpen, setIsOpen } = useContext(ContextModalCart)

  function getListOfShaurmaInCart(shaurmaList) {
    const costOfEveryShaurma = []

    for (let i = 0; i < shaurmaList.length; i++) {
      if (shaurmaList[i].inCart === true) {
        const costOfShaurma = shaurmaList[i].cost
        costOfEveryShaurma[i] = costOfShaurma
      } else {
        costOfEveryShaurma[i] = 0
      }
    }

    return costOfEveryShaurma
  }

  function createFullCostOfShaurma(shaurmaList) {
    const costOfEveryShaurma = getListOfShaurmaInCart(shaurmaList)
    let fullCost = 0

    for (let i = 0; i < costOfEveryShaurma.length; i++) {
      fullCost += costOfEveryShaurma[i]
    }

    return fullCost
  }

  async function closeModal() {
    setIsOpen(false)
    const shaurmaFromServer = await fetchShaurma()
    debugger
    setShaurmaList(shaurmaFromServer)
  }

  function alertMessage() {
    alert('Залогиньтесь вначале')
  }

  function changeButton() {
    let cartInfo
    if (storageUser.loggedIn === true) {
      cartInfo = (
        <Link className="btn btn-primary" to="/order" onClick={closeModal}>
          Оформить заказ
        </Link>
      )
    } else {
      cartInfo = (
        <button className="btn btn-primary" onClick={alertMessage}>
          Оформить заказ
        </button>
      )
    }
    return cartInfo
  }

  let cost = createFullCostOfShaurma(shaurmaList)
  let orderButton = changeButton()

  return (
    <Modal
      isOpen={modalIsOpen}
      id="modal-dialog"
      className="modal-dialog modal-dialog-scrollable"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div id="modal-content" className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          ></button>
        </div>
        <div id="cart-with-shaurma" className="modal-body">
          <ListOfCards></ListOfCards>
        </div>
        <div className="modal-footer">
          <strong id="fullCostOfShaurma">Вся стоимость: {cost} rub</strong>
          {orderButton}
        </div>
      </div>
    </Modal>
  )
}
