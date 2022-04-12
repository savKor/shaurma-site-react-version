import { Button } from './button/button'

export function ListOfCards(props) {
  const listOfCards = []
  const shaurmaList = props.shaurmaList
  for (let i = 0; i < shaurmaList.length; i++) {
    const nameOfShaurma = shaurmaList[i].name
    const costOfShaurma = shaurmaList[i].cost
    const idOfShaurma = `button-add_${shaurmaList[i]._id}`
    const idOfCardShaurma = `card_${shaurmaList[i]._id}`
    const statusShaurmaInCart = shaurmaList[i].inCart

    const cardsOfShaurma = (
      <div className="shaurma-cards" id={idOfCardShaurma}>
        <img
          id="image-shaurma"
          src="../images/Depositphotos_73527551_l-2015-pic905-895x505-54479.jpg"
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
                idOfShaurma={idOfShaurma}
              />
            </div>
          </div>
        </div>
      </div>
    )
    listOfCards[i] = cardsOfShaurma
  }

  return listOfCards
}
