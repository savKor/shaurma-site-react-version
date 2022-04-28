export function Modal() {
  return (
    <div
      class="modal fade"
      id="cartModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div id="modal-dialog" class="modal-dialog modal-dialog-scrollable">
        <div id="modal-content" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="cart-with-shaurma" class="modal-body"></div>
          <div class="modal-footer">
            <strong id="fullCostOfShaurma"></strong>
            <a type="button" class="btn btn-primary" href="./order.html">
              Оформить заказ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
