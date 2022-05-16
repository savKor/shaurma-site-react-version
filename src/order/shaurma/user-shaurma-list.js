import { useContext } from 'react'
import { deleteShaurmaInUserCart } from '../../action/fetch-cart'
import { fetchShaurma } from '../../action/fetch-array'
import { ModalAdditive } from './modal/modal-additive'
import { ContextShaurmaList } from '../../contex'
import { storage } from '../../contex/storage'

export function ListOfShaurmaCards(props) {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)

  const listOfCards = []
  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const nameOfShaurma = shaurmaList[i].name
      const costOfShaurma = shaurmaList[i].cost
      const idOfButtonDeleteShaurma = `shaurma-list_${shaurmaList[i]._id}`
      const idOfCard = `shaurma-card_${shaurmaList[i]._id}`
      const idOfModalButton = `modal_${shaurmaList[i]._id}`
      const shaurmaId = shaurmaList[i]._id

      async function openModal() {
        debugger
        storage.setValue('idOfChosenShaurma', shaurmaId)
      }

      async function deleteFromCart() {
        const shaurmaListFromServer = await fetchShaurma()
        await deleteShaurmaInUserCart({ shaurmaId })
        setShaurmaList(shaurmaListFromServer)
        storage.setValue('idOfChosenShaurma', undefined)
        storage.setValue('shaurmaList', shaurmaListFromServer)
      }

      const cardsOfShaurma = (
        <div id={idOfCard} className="user-order card mb-3">
          <div className="user-shaurma row g-0">
            <div id="image-container" className="col-md-4">
              <img
                src={
                  process.env.PUBLIC_URL +
                  'Depositphotos_73527551_l-2015-pic905-895x505-54479.jpg'
                }
                id="image-shaurma-in-order"
                className="img-fluid rounded-start"
                alt="..."
              ></img>
            </div>
            <div id="info-panel" className="col-md-8">
              <div className="info-of-shaurma">
                <button
                  type="button"
                  className="open-modal btn btn-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#additiveModal"
                  id={idOfModalButton}
                  onClick={openModal}
                >
                  Добавить добавки
                </button>
                <div id="additive-modal">
                  <ModalAdditive shaurmaOrdered={props.shaurmaOrdered} />
                </div>
                <h5 id="name-of-shaurma" className="card-title">
                  {nameOfShaurma}
                </h5>
                <p id="cost-for-shaurma" className="card-text">
                  Цена: {costOfShaurma}
                </p>
                <button
                  type="button"
                  className="delete-from-cart btn btn-primary"
                  id={idOfButtonDeleteShaurma}
                  onClick={deleteFromCart}
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>
      )

      listOfCards[i] = cardsOfShaurma
    }
  }

  if (listOfCards.length === 0) {
    return <div className="user-order card mb-3">Добавь шаурму</div>
  } else {
    return <div>{listOfCards}</div>
  }
}
