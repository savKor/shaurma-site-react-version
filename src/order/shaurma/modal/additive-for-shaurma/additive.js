import {
  changeStatusOfAdditiveButton,
  getAddButton,
  getDeleteButton,
} from './button/indexButton'

function createListOfCards(additiveList, shaurmaId, fullInfoAboutOrder) {
  const listOfCards = []

  for (let i = 0; i < additiveList.length; i++) {
    const nameOfAdditive = additiveList[i].name
    const costOfAdditive = additiveList[i].cost
    const imageOfAdditive = additiveList[i].image
    const idOfCard = `modal-card_${additiveList[i]._id}`
    const idOfAdditive = `button-addition_${additiveList[i]._id}`
    const buttonAdditive = changeStatusOfAdditiveButton(
      fullInfoAboutOrder,
      shaurmaId,
      idOfAdditive,
    )
    const cardsOfAdditive = (
      <div id={idOfCard} className="user-order card mb-3">
        <div className="user-additive row g-0">
          <div id="image-container" className="col-md-4">
            <img
              src={imageOfAdditive}
              id="image-additive-in-order"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">${nameOfAdditive}</h5>
              <p className="card-text">Цена: ${costOfAdditive}</p>
              <div>${buttonAdditive}</div>
            </div>
          </div>
        </div>
      </div>
    )

    listOfCards[i] = cardsOfAdditive
  }

  return listOfCards
}
