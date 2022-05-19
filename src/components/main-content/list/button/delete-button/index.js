import { useDispatch } from 'react-redux'
import { fetchShaurma } from '../../../../../api/fetch-array'
import { deleteShaurmaInUserCart } from '../../../../../api/fetch-cart'
import { updateShaurmaList } from '../../../../../features/counter/storageSlice'

export function DeleteButton(props) {
  const shaurmaId = props.shaurmaId
  const dispatch = useDispatch()

  async function deleteFromCart() {
    if (props.loggedIn === true) {
      await deleteShaurmaInUserCart({ shaurmaId })
      const shaurmaListFromServer = await fetchShaurma()
      dispatch(updateShaurmaList(shaurmaListFromServer))
    }
  }

  return (
    <button
      type="button"
      className="add-in-the-cart btn btn-primary"
      id={shaurmaId}
      onClick={deleteFromCart}
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
