import { ListOfCards } from './shaurma-in-cart/shaurma-list-in-cart'

export function Modal() {
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
            <strong id="fullCostOfShaurma"></strong>
            <a type="button" className="btn btn-primary" href="./order.html">
              Оформить заказ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
