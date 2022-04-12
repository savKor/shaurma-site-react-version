import {
  createDefoltModal,
  enableAdditiveButtonModal,
  insertAndCreateAdditiveForModal,
} from './modal/modal-additive'

function createListOfCards(shaurmaList) {
  const listOfCards = []
  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const nameOfShaurma = shaurmaList[i].name
      const costOfShaurma = shaurmaList[i].cost
      const idOfButtonDeleteShaurma = `shaurma-list_${shaurmaList[i]._id}`
      const idOfCard = `shaurma-card_${shaurmaList[i]._id}`
      const idOfModalButton = `modal_${shaurmaList[i]._id}`
      const defoltModal = createDefoltModal()
      const cardsOfShaurma = (
        <div id={idOfCard} className="user-order card mb-3">
          <div className="user-shaurma row g-0">
            <div id="image-container" className="col-md-4">
              <img
                src="../images/Depositphotos_73527551_l-2015-pic905-895x505-54479.jpg"
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
                >
                  Добавить добавки
                </button>
                <div id="additive-modal">${defoltModal}</div>
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
  return listOfCards
}

export function createAdditivesForModal(
  additiveList,
  shaurmaId,
  fullInfoAboutOrder,
) {
  insertAndCreateAdditiveForModal(additiveList, shaurmaId, fullInfoAboutOrder)
}

export function enableAdditiveAddOrDeleteOnShaurmaList(onHandleButtonAdditive) {
  enableAdditiveButtonModal(onHandleButtonAdditive)
}

export function enableEventOpenModalOfShaurma(openAdditiveModal) {
  document.getElementById('main-form').addEventListener('click', (event) => {
    getIdOfShaurma(event, openAdditiveModal)
  })
}

export function getShaurma(shaurmaList, additiveList) {
  const shaurmaCards = createListOfCards(shaurmaList, additiveList)
  const oneStringListOfCards = shaurmaCards.join('')
  return oneStringListOfCards
}

async function getIdOfShaurma(event, openAdditiveModal) {
  if (event.target.closest('.open-modal')) {
    const shaurmaId = event.target.closest('.open-modal').id
    const splitId = shaurmaId.split('_')
    openAdditiveModal(splitId[1])
  }
}

export function enableDeleteShaurma(onDeleteInCar) {
  document.getElementById('main-form').addEventListener('click', (event) => {
    onDeleteClick(event, onDeleteInCar)
  })
}

async function onDeleteClick(event, onDeleteInCart) {
  if (event.target.closest('.delete-from-cart')) {
    const shaurmaId = event.target.closest('.delete-from-cart').id
    debugger
    const splitId = shaurmaId.split('_')
    onDeleteInCart(splitId[1])
  }
}

export function markShaurmaItemDeletedFromOrder(shaurmaId) {
  const modalCard = document.getElementById(`shaurma-card_${shaurmaId}`)
  modalCard.remove()
}
