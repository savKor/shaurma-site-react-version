import { useNavigate } from 'react-router-dom'

export function ExitButton() {
  const navigate = useNavigate()
  function onExitClick() {
    localStorage.removeItem('token')
  }

  return (
    <button
      id="exit-button"
      type="button"
      className="btn btn-sm btn-outline-secondary"
      onClick={onExitClick}
    >
      Exit
    </button>
  )
}
