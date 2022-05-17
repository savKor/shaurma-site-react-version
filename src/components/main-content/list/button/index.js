import { AddButton } from './add-button/index.js'
import { DeleteButton } from './delete-button/index.js'
import { useStorageData } from '../../../../hook'
import { storage } from '../../../../storage/index.js'

export function ButtonAddOrDelete(props) {
  const storageUser = useStorageData(storage.data.storageUser, 'storageUser')
  const splitId = props.idOfShaurma.split('_')
  const shaurmaId = splitId[1]

  if (props.statusShaurmaInCart === false || storageUser.loggedIn === false) {
    return <AddButton shaurmaId={shaurmaId} loggedIn={storageUser.loggedIn} />
  }

  return <DeleteButton shaurmaId={shaurmaId} loggedIn={storageUser.loggedIn} />
}
