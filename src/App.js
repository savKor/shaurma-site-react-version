import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Error } from './components/Error'
import { LoginPage } from './components/Login'
import { MainPage } from './components/Main'
import { OrderPage } from './components/Order.js'
import { RegistrationPage } from './components/Registration.js'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
