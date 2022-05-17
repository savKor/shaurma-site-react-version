import { Footer } from './footer/index.js'
import { Header } from './header/index.js'
import { MainConten } from './main-content/index.js'
import { useStorageAndSetData } from '../hook/index.js'
import { getShaurma } from '../action/index.js'

export function MainPage() {
  const shaurmaList = useStorageAndSetData('shaurmaList', getShaurma())
  const pageOrder = false
  if (shaurmaList !== undefined) {
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
