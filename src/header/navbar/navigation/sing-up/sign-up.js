import { Link } from 'react-router-dom'

export function SignUpButton() {
  return (
    <Link
      id="register"
      className="btn btn-sm btn-outline-secondary"
      to="/registration"
    >
      Регистрация
    </Link>
  )
}
