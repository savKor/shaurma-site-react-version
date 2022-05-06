import { ListOfAdditiveCards } from './additive-for-shaurma/additive'

export function ModalAdditive(props) {
  return (
    <div
      className="modal fade"
      id="additiveModal"
      aria-labelledby="additiveModalLabel"
      aria-hidden="true"
    >
      <div id="modal-dialog" className="modal-dialog modal-dialog-scrollable">
        <div id="modal-content" className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Добавляй своё
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="additives-to-choose-from" className="modal-body">
            <ListOfAdditiveCards
              idOfCard={props.idOfCard}
            ></ListOfAdditiveCards>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  )
}
