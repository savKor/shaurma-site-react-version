import { storage } from '../../../../../../../storage'
import { fetchAdditive } from '../../../../../../../api/fetch-additive-array'

export function DeleteButton({ additiveId, newShaurmaOrdered, shaurmaId }) {
  async function deleteAdditive() {
    const chosenShaurma = newShaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )
    chosenShaurma.additiveIdList = chosenShaurma.additiveIdList.filter(
      (oneOfAdditiveId) => oneOfAdditiveId !== additiveId,
    )
    storage.setValue('shaurmaOrdered', newShaurmaOrdered)
    const additiveFromServer = await fetchAdditive()
    storage.setValue('additiveList', additiveFromServer)
  }

  return (
    <button
      type="button"
      className="delete-from-the-cart btn btn-primary"
      id={additiveId}
      onClick={deleteAdditive}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </button>
  )
}
