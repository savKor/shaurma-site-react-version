import { useContext } from 'react'
import { fetchShaurma } from '../../../../action/fetch-array'
import { deleteShaurmaInUserCart } from '../../../../action/fetch-cart'
import { ContextShaurmaList } from '../../../../contex'
import { storage } from '../../../../contex/storage'

export function DeleteButton(props) {
  const { setShaurmaList } = useContext(ContextShaurmaList)
  const shaurmaId = props.shaurmaId

  async function deleteFromCart() {
    if (props.loggedIn === true) {
      await deleteShaurmaInUserCart({ shaurmaId })
      const shaurmaListFromServer = await fetchShaurma()
      setShaurmaList(shaurmaListFromServer)
      storage.setValue('shaurmaList', shaurmaListFromServer)
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
