import { useContext } from 'react'
import { ContextAdditiveList } from '../../../../../Order'

export function DeleteButton(props.idOfAdditive) {
  return (
    <button
      type="button"
      className="add-or-delete-additive btn btn-primary"
      id={props.idOfAdditive}
      eventName="delete"
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

export function AddButton(props.idOfAdditive) {
  return (
    <button
      type="button"
      className="add-or-delete-additive btn btn-primary"
      eventName="add"
      id={props.idOfAdditive}
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

export function AdditiveButton( props) {
  const { shaurmaOrdered, setShaurmaOrdered } = useContext(ContextAdditiveList)
  let buttonShaurma
  const additiveId = props.idOfAdditive.split('_')
  const chosenShaurma = shaurmaOrdered.find(
    (shaurma) => props.shaurmaId === shaurma.props.shaurmaId,
  )

  const additiveOfShaurma = chosenShaurma.additiveIdList.find(
    (additive) => additiveId[1] === additive,
  )

  if (additiveOfShaurma) {
    buttonShaurma = DeleteButton(props.idOfAdditive)
  } else {
    buttonShaurma = AddButton(props.idOfAdditive)
  }

  return buttonShaurma
}
