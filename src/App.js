import { createContext, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { RegistrationPage } from './Registration.js'
import { storage } from './storage/storage'

export const ContextWeb = createContext({
  storageUser: {},
  setStorage: () => {},
})

function App() {
  const [storageUser, setStorage] = useState(storage.user)

  const value = { storageUser, setStorage }

  return (
    <Router>
      <ContextWeb.Provider value={value}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ContextWeb.Provider>
    </Router>
  )
}

export default App
