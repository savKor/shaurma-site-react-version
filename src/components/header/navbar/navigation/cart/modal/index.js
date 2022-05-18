import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { ListOfCards } from './shaurma-in-cart/shaurma-cards-in-cart.js'
import {
  selectState,
  updateModalStatus,
} from '../../../../../../features/counter/counterSlice.js'
import { useDispatch, useSelector } from 'react-redux'

export function ModalCard(props) {
  const shaurmaList = props.shaurmaList
  const dispatch = useDispatch()
  const store = useSelector(selectState)
  console.log(store)
  const storageUser = store.storageUser
  const modalStatus = store.modalStatus

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
    dispatch(updateModalStatus(false))
  }

  async function openNewPage() {
    dispatch(updateModalStatus(false))
  }

  function alertMessage() {
    alert('Залогиньтесь вначале')
  }

  function changeButton() {
    let cartInfo
    if (storageUser.loggedIn === true) {
      cartInfo = (
        <Link className="btn btn-primary" to="/order" onClick={openNewPage}>
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

  if (shaurmaList !== undefined) {
    let cost = createFullCostOfShaurma(shaurmaList)
    let orderButton = changeButton()

    return (
      <Modal
        isOpen={modalStatus}
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
              aria-label="Close"
              onClick={closeModal}
              data-dismiss="modal"
            ></button>
          </div>
          <div id="cart-with-shaurma" className="modal-body">
            <ListOfCards shaurmaList={props.shaurmaList}></ListOfCards>
          </div>
          <div className="modal-footer">
            <strong id="fullCostOfShaurma">Вся стоимость: {cost} rub</strong>
            {orderButton}
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
