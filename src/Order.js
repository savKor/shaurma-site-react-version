import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'
import { fetchAdditive } from './api/fetch-additive-array'
import { Footer } from './footer/footer'
import { Header } from './header'
import { OrderForm } from './order/index'

export function OrderPage() {
  const [addressCoonrdinates, setAddressCoonrdinates] = useState()
  const pageOrder = true
  return (
    <div>
      <Header pageOrder={pageOrder} />
      <OrderForm />
      <Footer />
    </div>
  )
}
