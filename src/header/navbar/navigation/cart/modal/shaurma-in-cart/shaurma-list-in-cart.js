import { useContext } from 'react'
import { ContextShaurmaList } from '../../../../../../App'
import { ShaurmaCardInCart } from './shaurma-card-in-cart/shaurma-card'

export function ListOfCards() {
  const { shaurmaList } = useContext(ContextShaurmaList)

  const listOfCards = []

  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const nameOfShaurma = shaurmaList[i].name
      const costOfShaurma = shaurmaList[i].cost
      const idOfCard = `modal-card_${shaurmaList[i]._id}`
      const idOfShaurma = `shaurma-list_${shaurmaList[i]._id}`

      const cardsOfShaurma = (
        <ShaurmaCardInCart
          nameOfShaurma={nameOfShaurma}
          costOfShaurma={costOfShaurma}
          idOfCard={idOfCard}
          idOfShaurma={idOfShaurma}
          statusShaurmaInCart={shaurmaList[i].inCart}
        ></ShaurmaCardInCart>
      )
      listOfCards[i] = cardsOfShaurma
    }
  }

  console.log(listOfCards)
  return (
    <div id="card-list" className="row row-cols-1 g-3">
      {listOfCards}
    </div>
  )
}
