import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/" className="navbar-brand">
      <strong>Шурма</strong>
    </Link>
  )
}
