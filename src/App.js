import { createContext, useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { fetchShaurma } from './api/fetch-array'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { OrderPage } from './Order.js'
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

function App() {
  const [shaurmaList, setShaurmaList] = useState(null)
  const [storageUser, setStorage] = useState(storage.user)
  const storageOfUserInfo = { storageUser, setStorage }
  const shuarma = { shaurmaList, setShaurmaList }

  async function getShaurma() {
    const shaurmaFromServer = await fetchShaurma()
    setShaurmaList(shaurmaFromServer)
  }

  useEffect(() => {
    getShaurma()

    return () => {}
  }, [])

  return (
    <Router>
      <ContextUser.Provider value={storageOfUserInfo}>
        <ContextShaurmaList.Provider value={shuarma}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ContextShaurmaList.Provider>
      </ContextUser.Provider>
    </Router>
  )
}

export default App
