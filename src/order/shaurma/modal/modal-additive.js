export function createDefoltModal() {
  return (
    <div
      class="modal fade"
      id="additiveModal"
      aria-labelledby="additiveModalLabel"
      aria-hidden="true"
    >
      <div id="modal-dialog" class="modal-dialog modal-dialog-scrollable">
        <div id="modal-content" class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Добавляй своё
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div id="additives-to-choose-from" class="modal-body"></div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  )
}
