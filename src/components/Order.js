import 'mapbox-gl/dist/mapbox-gl.css'
import { Footer } from './footer'
import { Header } from './header'
import { useStorageAndSetData } from '../hook'
import { OrderForm } from './order/index'
import { getShaurma } from '../action'

export function OrderPage() {
  const shaurmaList = useStorageAndSetData('shaurmaList', getShaurma())
  const pageOrder = true

  if (shaurmaList !== undefined) {
    return (
      <div>
        <Header pageOrder={pageOrder} />
        <OrderForm />
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
