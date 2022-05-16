import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { fetchShaurma } from './action/fetch-array'
import { ContextShaurmaList } from './contex'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { OrderPage } from './Order.js'
import { RegistrationPage } from './Registration.js'

function App() {
  const [shaurmaList, setShaurmaList] = useState(null)

  const contextValueOfShaurmaList = { shaurmaList, setShaurmaList }

  async function getShaurma() {
    const shaurmaListFromServer = await fetchShaurma()
    setShaurmaList(shaurmaListFromServer)
  }

  useEffect(() => {
    getShaurma()
    return () => {}
  }, [])

  return (
    <Router>
      <ContextShaurmaList.Provider value={contextValueOfShaurmaList}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextShaurmaList.Provider>
    </Router>
  )
}

export default App
