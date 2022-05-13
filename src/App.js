import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { fetchShaurma } from './action/fetch-array'
import { ContextShaurmaList, ContextUser } from './contex'
import { storage } from './contex/storage'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { OrderPage } from './Order.js'
import { RegistrationPage } from './Registration.js'
import { storageUserFullInfo } from './storage/storage'

function App() {
  const [shaurmaList, setShaurmaList] = useState(null)
  const [storageUser, setStorage] = useState(storageUserFullInfo.user)

  const valueOfUserForContext = { storageUser, setStorage }
  const contextValueOfShaurmaList = { shaurmaList, setShaurmaList }

  async function getShaurma() {
    const shaurmaFromServer = await fetchShaurma()
    setShaurmaList(shaurmaFromServer)
  }

  useEffect(() => {
    storage.setValue('storageUser', storageUserFullInfo.user)
  }, [])

  useEffect(() => {
    getShaurma()

    return () => {}
  }, [])

  return (
    <Router>
      <ContextUser.Provider value={valueOfUserForContext}>
        <ContextShaurmaList.Provider value={contextValueOfShaurmaList}>
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
