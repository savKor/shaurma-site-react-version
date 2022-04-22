import { ShaurmaCardInCart } from './shaurma-card-in-cart/shaurma-card'

function createListOfCards(shaurmaList) {
  const listOfCards = []

  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const nameOfShaurma = shaurmaList[i].name
      const costOfShaurma = shaurmaList[i].cost
      const idOfCard = /* html */ `modal-card_${shaurmaList[i]._id}`
      const idOfShaurma = /* html */ `shaurma-list_${shaurmaList[i]._id}`
      const cardsOfShaurma = (
        <ShaurmaCardInCart
          idOfCard={idOfCard}
          nameOfShaurma={nameOfShaurma}
          costOfShaurma={costOfShaurma}
          idOfShaurma={idOfShaurma}
        ></ShaurmaCardInCart>
      )
      listOfCards[i] = cardsOfShaurma
    }
  }

  return listOfCards
}
