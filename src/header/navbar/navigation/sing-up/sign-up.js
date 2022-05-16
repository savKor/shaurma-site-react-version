import { Link } from 'react-router-dom'
import { storage } from '../../../../contex/storage'

export function SignUpButton() {
  function unsubscribe() {
    storage.unsubscribe('modalStatus')
    storage.unsubscribe('storageUser')
  }

  return (
    <Link
      id="register"
      className="btn btn-sm btn-outline-secondary"
      to="/registration"
      onClick={unsubscribe}
    >
      Регистрация
    </Link>
  )
}
