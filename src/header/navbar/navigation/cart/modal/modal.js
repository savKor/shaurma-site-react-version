import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextShaurmaList, ContextUser } from '../../../../../App'
import { ListOfCards } from './shaurma-in-cart/shaurma-list-in-cart'

export function Modal() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)

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

  let cost = createFullCostOfShaurma(shaurmaList)

  return (
    <div
      className="modal fade"
      id="cartModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div id="modal-dialog" className="modal-dialog modal-dialog-scrollable">
        <div id="modal-content" className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="cart-with-shaurma" className="modal-body">
            <ListOfCards></ListOfCards>
          </div>
          <div className="modal-footer">
            <strong id="fullCostOfShaurma">Вся стоимость: {cost} rub</strong>
            <Link id="register" className="btn btn-primary" to="/registration">
              Оформить заказ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
