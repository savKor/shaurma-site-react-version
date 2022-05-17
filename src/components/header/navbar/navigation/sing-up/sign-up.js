import { Link } from 'react-router-dom'

export function SignUpButton() {
  function unsubscribe() {}

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
