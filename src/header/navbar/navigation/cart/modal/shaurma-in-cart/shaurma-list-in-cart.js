import { createContext, useContext, useEffect, useState } from 'react'
import { fetchShaurma } from '../../../../../../api/fetch-array'
import { ContextShaurmaList } from '../../../../../../App'
import { ShaurmaCardInCart } from './shaurma-card-in-cart/shaurma-card'

export const ContextStatusInCart = createContext({
  shaurmaList: '',
  setShaurmaList: () => {},
})

export function ListOfCards() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const [statusInCart, setStatusInCart] = useState(true)

  const value = { statusInCart, setStatusInCart }
  const listOfCards = []

  useEffect(() => {
    async function getShaurma() {
      const shaurmaFromServer = await fetchShaurma()
      setShaurmaList(shaurmaFromServer)
    }
    if (statusInCart === false) {
      debugger
      getShaurma()
      setStatusInCart(true)
    }
  }, [statusInCart])

  for (let i = 0; i < shaurmaList.length; i++) {
    if (shaurmaList[i].inCart === true) {
      const nameOfShaurma = shaurmaList[i].name
      const costOfShaurma = shaurmaList[i].cost
      const idOfCard = `modal-card_${shaurmaList[i]._id}`
      const idOfShaurma = `shaurma-list_${shaurmaList[i]._id}`

      const cardsOfShaurma = (
        <ContextStatusInCart.Provider value={value}>
          <ShaurmaCardInCart
            nameOfShaurma={nameOfShaurma}
            costOfShaurma={costOfShaurma}
            idOfCard={idOfCard}
            idOfShaurma={idOfShaurma}
            statusShaurmaInCart={shaurmaList[i].inCart}
          ></ShaurmaCardInCart>
        </ContextStatusInCart.Provider>
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
