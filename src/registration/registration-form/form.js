import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../action/fetch-registration'

export function RegistrarionForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  console.log(username, password)

  async function handleRegistrationResult(result) {
    if (result.success === false) {
      alert(result.errors[0].message)
    } else {
      navigate('/login')
    }
  }

  const handleRegistrationClick = async () => {
    const result = await registerUser({ username, password })
    handleRegistrationResult(result)
  }

  return (
    <form id="registerForm">
      <div className="form-outline mb-4">
        <input
          value={username}
          type="text"
          id="username"
          className="form-control form-control-lg"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-label" htmlFor="username">
          Your Name
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          value={password}
          type="password"
          id="password"
          className="form-control form-control-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>

      <div className="d-flex justify-content-center">
        <button
          id="register"
          type="button"
          onClick={handleRegistrationClick}
          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
        >
          Register
        </button>
      </div>

      <p className="text-center text-muted mt-5 mb-0">
        Have already an account?
        <Link href="/html/login.html" className="fw-bold text-body" to="/login">
          <u>Login here</u>
        </Link>
      </p>
    </form>
  )
}
