import { createContext, useMemo, useState } from 'react'
import { storage } from '../../storage/storage'
import { Logo } from './logo/logo'
import { Navigation } from './navigation/navigation'



export function Navbar(props) {

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Logo />
        <Navigation shaurmaList={props.shaurmaList} />
      </div>
    </div>
  )
}
