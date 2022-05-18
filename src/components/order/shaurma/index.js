import { deleteShaurmaInUserCart } from '../../../api/fetch-cart'
import { fetchShaurma } from '../../../api/fetch-array'
import { ModalAdditive } from './modal/modal-additive'
import { storage } from '../../../storage'
import { useStorageAndSetData } from '../../../hook'
import { getShaurma } from '../../../action'
import { useDispatch } from 'react-redux'
import { updateIdOfChosenShaurma } from '../../../features/counter/counterSlice'

export function ListOfShaurmaCards(props) {
  const shaurmaList = useStorageAndSetData('shaurmaList', getShaurma())
  const dispatch = useDispatch()

  if (shaurmaList !== undefined) {
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
          dispatch(updateIdOfChosenShaurma(shaurmaId))
        }

        async function deleteFromCart() {
          await deleteShaurmaInUserCart({ shaurmaId })
          const shaurmaListFromServer = await fetchShaurma()
          dispatch(updateIdOfChosenShaurma(undefined))
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

  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
