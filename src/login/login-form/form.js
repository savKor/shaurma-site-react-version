import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchShaurma } from '../../action/fetch-array'
import { loginUser } from '../../action/fetch-login'
import { setToken } from '../../action/token'
import { ContextShaurmaList } from '../../contex'
import { storage } from '../../contex/storage'
import { createUserData } from '../../user-information'

export function LoginForm() {
  const { setShaurmaList } = useContext(ContextShaurmaList)

  const [loginFormInfo, setLoginFormInfo] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

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

  async function handleLoginResult(result) {
    if (result.success === false) {
      alert(result.errors[0].message)
    } else {
      const dataKey = result.data
      setToken(dataKey.token)
      const shaurmaListFromServer = await fetchShaurma()
      storage.setValue(
        'storageUser',
        createUserData(localStorage.getItem('token')),
      )
      setShaurmaList(shaurmaListFromServer)
      storage.setValue('shaurmaList', shaurmaListFromServer)
      navigate('/')
    }
  }

  async function handleLoginClick() {
    const result = await loginUser(loginFormInfo)
    handleLoginResult(result)
  }

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
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </form>
  )
}
