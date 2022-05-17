import { storage } from '../../../../../../storage'
import { useStorageData } from '../../../../../../hook'
import { AddButton } from './add-button'
import { DeleteButton } from './delete-button'

export function Button(props) {
  const idOfChosenShaurma = useStorageData(
    storage.data.idOfChosenShaurma,
    'idOfChosenShaurma',
  )

  const shaurmaOrdered = props.shaurmaOrdered
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
      button = (
        <DeleteButton
          additiveId={additiveId}
          newShaurmaOrdered={shaurmaOrdered}
          shaurmaId={shaurmaId}
        />
      )
    } else {
      button = (
        <AddButton
          additiveId={additiveId}
          newShaurmaOrdered={shaurmaOrdered}
          shaurmaId={shaurmaId}
        />
      )
    }
    return button
  }

  if (shaurmaOrdered !== undefined && idOfChosenShaurma !== undefined) {
    buttonAdditive = getButton()
    return <div>{buttonAdditive}</div>
  }
  return <div>Не загрузились данные</div>
}
