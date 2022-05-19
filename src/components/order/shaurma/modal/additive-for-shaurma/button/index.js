import { useSelector } from 'react-redux'
import { AddButton } from './add-button'
import { DeleteButton } from './delete-button'
import { selectState } from '../../../../../../features/counter/storageSlice'

export function Button(props) {
  const store = useSelector(selectState)
  const shaurmaOrdered = store.shaurmaOrdered
  const idOfChosenShaurma = store.idOfChosenShaurma

  let buttonAdditive

  function getButton() {
    let button
    const shaurmaId = idOfChosenShaurma
    const additiveId = props.idOfAdditive

    const chosenShaurma = shaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )

    const additiveOfShaurma = chosenShaurma.additiveIdList.find(
      (additive) => additiveId === additive,
    )

    if (additiveOfShaurma) {
      button = <DeleteButton additiveId={additiveId} shaurmaId={shaurmaId} />
    } else {
      button = <AddButton additiveId={additiveId} shaurmaId={shaurmaId} />
    }
    return button
  }

  if (shaurmaOrdered !== undefined && idOfChosenShaurma !== undefined) {
    buttonAdditive = getButton()
    return <div>{buttonAdditive}</div>
  }
  return <div>Не загрузились данные</div>
}
