import { useEffect, useState } from 'react'
import { storage } from '../../../../../contex/storage'
import { AddButton } from './add-button'
import { DeleteButton } from './delete-button'

export function Button(props) {
  const [idOfChosenShaurma, setIdOfChosenShauma] = useState()

  const shaurmaOrdered = props.shaurmaOrdered

  async function getChosenShaurma(data) {
    setIdOfChosenShauma(data)
  }

  useEffect(() => {
    storage.subscribe('idOfChosenShaurma', getChosenShaurma)
  }, [])

  let buttonAdditive

  function getButton() {
    let button
    const shaurmaId = idOfChosenShaurma
    debugger
    const additiveId = props.idOfAdditive
    const chosenShaurma = shaurmaOrdered.find(
      (shaurma) => shaurmaId === shaurma.shaurmaId,
    )

    debugger
    const additiveOfShaurma = chosenShaurma.additiveIdList.find(
      (additive) => additiveId === additive,
    )

    debugger
    if (additiveOfShaurma) {
      button = (
        <DeleteButton
          additiveId={additiveId}
          newShaurmaOrdered={shaurmaOrdered}
          shaurmaId={shaurmaId}
        />
      )
    } else {
      debugger
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
