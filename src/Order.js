import 'mapbox-gl/dist/mapbox-gl.css'
import { useContext } from 'react'
import { ContextShaurmaList } from './contex'
import { Footer } from './footer/footer'
import { Header } from './header'
import { OrderForm } from './order/index'

export function OrderPage() {
  const { shaurmaList } = useContext(ContextShaurmaList)

  const pageOrder = true

  if (shaurmaList !== null) {
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
