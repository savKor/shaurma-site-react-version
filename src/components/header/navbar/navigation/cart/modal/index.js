import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { ListOfCards } from './shaurma-in-cart/shaurma-cards-in-cart.js'
import { fetchShaurma } from '../../../../../../api/fetch-array'
import { storage } from '../../../../../../storage'
import { useStorageData, useStorageAndSetData } from '../../../../../../hook'
import { getShaurma } from '../../../../../../action/index.js'

export function ModalCard() {
  const shaurmaList = useStorageAndSetData('shaurmaList', getShaurma())
  const storageUser = useStorageData(storage.data.storageUser, 'storageUser')
  const modalStatus = useStorageData(storage.data.modalStatus, 'modalStatus')

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
    storage.setValue('modalStatus', false)
  }

  async function openNewPage() {
    storage.setValue('modalStatus', false)
    const shaurmaListFromServer = await fetchShaurma()
    storage.setValue('shaurmaList', shaurmaListFromServer)
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

  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
