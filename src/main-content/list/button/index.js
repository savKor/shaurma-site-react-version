import { AddButton } from './add-button/index.js'
import { DeleteButton } from './delete-button/index.js'
import { useUser } from '../../../hook'

export function ButtonAddOrDelete(props) {
  const storageUser = useUser()

  const splitId = props.idOfShaurma.split('_')
  const shaurmaId = splitId[1]

  if (props.statusShaurmaInCart === false || storageUser.loggedIn === false) {
    return <AddButton shaurmaId={shaurmaId} loggedIn={storageUser.loggedIn} />
  }

  return <DeleteButton shaurmaId={shaurmaId} loggedIn={storageUser.loggedIn} />
}
