import { Link } from 'react-router-dom'

export function BackButton() {
  return (
    <Link
      id="back-button"
      type="button"
      className="btn btn-sm btn-outline-secondary"
      to="/"
    >
      Back
    </Link>
  )
}
