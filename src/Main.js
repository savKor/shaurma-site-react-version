import { useContext, useEffect, useState } from 'react'
import { fetchShaurma } from './api/fetch-array.js'
import { ContextShaurmaList } from './App.js'
import { Footer } from './footer/footer.js'
import { Header } from './header/index.js'
import { MainConten } from './main-content/index.js'

export function MainPage() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)

  if (shaurmaList !== null) {
    return (
      <div>
        <Header shaurmaList={shaurmaList} />
        <MainConten shaurmaList={shaurmaList} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
