import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Error } from './Error'
import { LoginPage } from './Login'
import { MainPage } from './Main'
import { RegistrationPage } from './Registration.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
