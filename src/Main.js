import { useContext } from 'react'
import { ContextShaurmaList } from './App.js'
import { Footer } from './footer/footer.js'
import { Header } from './header/index.js'
import { MainConten } from './main-content/index.js'

export function MainPage() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const pageOrder = false
  if (shaurmaList !== null) {
    return (
      <div>
        <Header pageOrder={pageOrder} />
        <MainConten />
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
