import { createStorage } from '../../../../storage/storage'

export function ExitButton() {
  function onExitClick() {
    localStorage.removeItem('token')
    createStorage()
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
