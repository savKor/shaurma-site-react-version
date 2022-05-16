import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { ListOfCards } from './shaurma-in-cart/shaurma-list-in-cart'
import { fetchShaurma } from '../../../../../action/fetch-array'
import { ContextShaurmaList } from '../../../../../contex'
import { storage } from '../../../../../contex/storage'
import { useUser } from '../../../../../hook'

export function ModalCard() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const [modalIsOpen, setModalIsOpen] = useState()

  const storageUser = useUser()

  async function handleChangeContext(data) {
    setModalIsOpen(data)
  }

  useEffect(() => {
    storage.subscribe('modalStatus', handleChangeContext)
    setModalIsOpen(false)
  }, [])

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
    setShaurmaList(shaurmaListFromServer)
    storage.setValue('shaurmaList', shaurmaListFromServer)
    storage.unsubscribe('modalStatus')
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
