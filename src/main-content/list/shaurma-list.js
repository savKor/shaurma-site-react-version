import { useContext } from 'react'
import { ContextShaurmaList } from '../../App'
import { Button } from './button/button'

export function ListOfCards() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)

  const listOfCards = []

  for (let i = 0; i < shaurmaList.length; i++) {
    const nameOfShaurma = shaurmaList[i].name
    const costOfShaurma = shaurmaList[i].cost
    const idOfShaurmaButton = `button-add_${shaurmaList[i]._id}`
    const idOfCardShaurma = `card_${shaurmaList[i]._id}`
    const statusShaurmaInCart = shaurmaList[i].inCart

    debugger
    const cardsOfShaurma = (
      <div
        className="shaurma-cards"
        id={idOfCardShaurma}
        key={shaurmaList[i]._id}
      >
        <img
          id="image-shaurma"
          src={
            process.env.PUBLIC_URL +
            'Depositphotos_73527551_l-2015-pic905-895x505-54479.jpg'
          }
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body bg-secondary text-center">
          <h5 className="card-title">{nameOfShaurma}</h5>
          <div className="row row-cols-1 row-cols-sm-2">
            <h6 className="card-text">{costOfShaurma} rub</h6>
            <div>
              <Button
                statusShaurmaInCart={statusShaurmaInCart}
                idOfShaurma={idOfShaurmaButton}
                shaurmaList={shaurmaList}
              />
            </div>
          </div>
        </div>
      </div>
    )
    listOfCards[i] = cardsOfShaurma
  }

  return (
    <div
      id="card-list"
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-md-4 g-3"
    >
      {listOfCards}
    </div>
  )
}
