import { createContext, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { fetchShaurma } from './api/fetch-array'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { RegistrationPage } from './Registration.js'
import { storage } from './storage/storage'

export const ContextUser = createContext({
  storageUser: {},
  setStorage: () => {},
})

export const ContextShaurmaList = createContext({
  shaurmaList: {},
  setShaurmaList: () => {},
})

export const ContextStatusShaurmaInMain = createContext({
  statusInCartOnMain: '',
  setStatusInCartInMain: () => {},
})

function App() {
  const [shaurmaList, setShaurmaList] = useState(null)

  const [storageUser, setStorage] = useState(storage.user)

  const [statusInCartInMain, setStatusInCartInMain] = useState()

  const statusInMain = { statusInCartInMain, setStatusInCartInMain }

  const storageOfUserInfo = { storageUser, setStorage }

  const shuarma = { shaurmaList, setShaurmaList }

  useEffect(() => {
    async function getShaurma() {
      const shaurmaFromServer = await fetchShaurma()
      setShaurmaList(shaurmaFromServer)
    }

    getShaurma()
  }, [])

  return (
    <Router>
      <ContextUser.Provider value={storageOfUserInfo}>
        <ContextShaurmaList.Provider value={shuarma}>
          <ContextStatusShaurmaInMain.Provider value={statusInMain}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ContextStatusShaurmaInMain.Provider>
        </ContextShaurmaList.Provider>
      </ContextUser.Provider>
    </Router>
  )
}

export default App
