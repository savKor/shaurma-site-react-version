import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchShaurma } from '../../../api/fetch-array'
import { loginUser } from '../../../api/fetch-login'
import { setToken } from '../../../api/token'
import { updateStorageUser } from '../../../features/counter/counterSlice'
import { storage } from '../../../storage'
import { createUserData } from '../../../user-information'

export function LoginForm() {
  const dispatch = useDispatch()

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
      dispatch(updateStorageUser(createUserData(localStorage.getItem('token'))))
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
