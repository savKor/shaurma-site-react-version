import { useState } from 'react'
export function LoginForm() {
  const [loginFormInfo, setLoginFormInfo] = useState({
    username: '',
    password: '',
  })

  function changeUsername(e) {
    setLoginFormInfo({
      username: e.target.value,
      password: loginFormInfo.password,
    })
  }

  function changePassword(e) {
    setLoginFormInfo({
      username: loginFormInfo.username,
      password: e.target.value,
    })
  }

  function handleLoginResult(result) {
    if (result.success === false) {
      alert(result.errors[0].message)
    } else {
      const dataKey = result.data
      localStorage.setItem('token', dataKey.token)
      window.location.href = '/html/home.html'
    }
  }

  async function onLoginClick() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const result = await loginUser({ username, password })

    handleLoginResult(result)
  }

  function handleLoginButtonClick(result) {}
  console.log(loginFormInfo)
  return (
    <form id="loginForm">
      <div className="form-outline mb-4">
        <input
          value={loginFormInfo.username}
          type="text"
          id="username"
          className="form-control form-control-lg"
          onChange={(e) => changeUsername(e)}
        />
        <label className="form-label" htmlFor="username">
          Your Name
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          value={loginFormInfo.password}
          type="password"
          id="password"
          className="form-control form-control-lg"
          onChange={(e) => changePassword(e)}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
      </div>

      <div className="d-flex justify-content-center">
        <button
          id="login"
          type="button"
          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
        >
          Login
        </button>
      </div>
    </form>
  )
}
