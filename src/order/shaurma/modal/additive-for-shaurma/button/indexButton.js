import { useContext } from 'react'
import { ContextShaurmaOrder } from '../../../../../Order'
import { ContextShaurmaId } from '../../../user-shaurma-list'
import { ContextAdditiveList } from '../../modal-additive'
import { fetchAdditive } from '../../../../../api/fetch-additive-array'

export function DeleteButton({ additiveId, newShaurmaOrdered }) {
  const { shaurmaOrdered, setShaurmaOrdered } = useContext(ContextShaurmaOrder)
  const { setAdditiveList } = useContext(ContextAdditiveList)
  const { idOfChosenShauma } = useContext(ContextShaurmaId)

  const shaurmaId = idOfChosenShauma

  async function deleteAdditive() {
    const chosenShaurma = newShaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )
    chosenShaurma.additiveIdList = chosenShaurma.additiveIdList.filter(
      (oneOfAdditiveId) => oneOfAdditiveId !== additiveId,
    )
    setShaurmaOrdered(newShaurmaOrdered)

    const additiveFromServer = await fetchAdditive()
    setAdditiveList(additiveFromServer)
    console.log(shaurmaOrdered)
  }

  return (
    <button
      type="button"
      className="add-or-delete-additive btn btn-primary"
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

export function AddButton({ additiveId, newShaurmaOrdered }) {
  const { shaurmaOrdered, setShaurmaOrdered } = useContext(ContextShaurmaOrder)
  const { setAdditiveList } = useContext(ContextAdditiveList)
  const { idOfChosenShauma } = useContext(ContextShaurmaId)

  const shaurmaId = idOfChosenShauma

  async function addAdditive() {
    const chosenShaurma = newShaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )
    chosenShaurma.additiveIdList.push(additiveId)
    setShaurmaOrdered(newShaurmaOrdered)
    const additiveFromServer = await fetchAdditive()
    setAdditiveList(additiveFromServer)
    console.log(shaurmaOrdered)
  }

  return (
    <button
      type="button"
      className="add-or-delete-additive btn btn-primary"
      id={additiveId}
      onClick={addAdditive}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart-plus"
        viewBox="0 0 16 16"
      >
        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    </button>
  )
}

export function AdditiveButton(props) {
  const { shaurmaOrdered, setShaurmaOrdered } = useContext(ContextShaurmaOrder)
  const { idOfChosenShauma } = useContext(ContextShaurmaId)

  let buttonShaurma

  if (shaurmaOrdered !== undefined && idOfChosenShauma !== undefined) {
    let shaurmaId = idOfChosenShauma
    let additiveId = props.idOfAdditive

    debugger

    const chosenShaurma = shaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )

    const additiveOfShaurma = chosenShaurma.additiveIdList.find(
      (additive) => additiveId === additive,
    )

    if (additiveOfShaurma) {
      buttonShaurma = (
        <DeleteButton
          additiveId={additiveId}
          newShaurmaOrdered={shaurmaOrdered}
        />
      )
    } else {
      buttonShaurma = (
        <AddButton
          additiveId={additiveId}
          shaurmaId={shaurmaId}
          newShaurmaOrdered={shaurmaOrdered}
        />
      )
    }
    return <div>{buttonShaurma}</div>
  }
  return <div>net</div>
}
