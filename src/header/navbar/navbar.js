import { createContext, useMemo, useState } from 'react'
import { storage } from '../../storage/storage'
import { Logo } from './logo/logo'
import { Navigation } from './navigation/navigation'

export const Context = createContext({
  storageUser: {},
  setStorage: () => {},
})

export function Navbar(props) {
  const [storageUser, setStorage] = useState(storage.user)

  const value = { storageUser, setStorage }

  return (
    <Context.Provider value={value}>
      <div className="navbar navbar-dark bg-dark">
        <div className="container">
          <Logo />
          <Navigation shaurmaList={props.shaurmaList} />
        </div>
      </div>
    </Context.Provider>
  )
}
