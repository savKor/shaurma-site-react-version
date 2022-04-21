import { createContext, useContext, useState } from 'react'
import {
  deleteShaurmaInUserCart,
  putShaurmaInUserCart,
} from '../../../api/fetch-cart'
import { storage } from '../../../storage/storage'

export function DisabledButton(props) {
  const splitId = props.idOfShaurma.split('_')

  /*  async function deleteFromCart(idOfShaurma) {
    if (storage.user.loggedIn === true) {
      await deleteShaurmaInUserCart({ idOfShaurma })
      setStatusInCart(false)
    }
  }
  */
  return (
    <button
      type="button"
      className="delete-from-main btn btn-primary"
      id={props.idOfShaurma}
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

export function EnableButton(props) {
  const splitId = props.idOfShaurma.split('_')

  /*  async function addInCart(idOfShaurma) {
    if (storage.user.loggedIn === true) {
      await putShaurmaInUserCart({ idOfShaurma })
      setStatusInCart(true)
    }
  }
*/
  return (
    <button
      type="button"
      className="add-in-the-cart btn btn-primary"
      id={props.idOfShaurma}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
      </svg>
    </button>
  )
}

export function Button(props) {
  const [statusInCart, setStatusInCart] = useState(props.statusShaurmaInCart)

  if (statusInCart === false) {
    return <EnableButton idOfShaurma={props.idOfShaurma} />
  }
  return <DisabledButton idOfShaurma={props.idOfShaurma} />
}
