import 'mapbox-gl/dist/mapbox-gl.css'
import { useContext, useEffect, useState } from 'react'
import { ContextShaurmaList, ContextShaurmaOrder } from './contex'
import { Footer } from './footer/footer'
import { Header } from './header'
import { OrderForm } from './order/index'

export function OrderPage() {
  const { shaurmaList } = useContext(ContextShaurmaList)

  const [shaurmaOrdered, setShaurmaOrdered] = useState()

  const shaurmaOrderValueForContext = { shaurmaOrdered, setShaurmaOrdered }

  function addShaurmanThatInCart(shaurmaList) {
    let orderInfo = []
    let shaurmaObject
    for (let i = 0; i < shaurmaList.length; i++) {
      if (shaurmaList[i].inCart === true) {
        shaurmaObject = {
          // объект
          shaurmaId: shaurmaList[i]._id,
          additiveIdList: [],
        }
        orderInfo.push(shaurmaObject)
      }
    }
    setShaurmaOrdered(orderInfo)
  }

  useEffect(() => {
    if (shaurmaList !== null) {
      addShaurmanThatInCart(shaurmaList)
    }
  }, [shaurmaList])

  const pageOrder = true

  if (shaurmaList !== null) {
    return (
      <div>
        <Header pageOrder={pageOrder} />
        <ContextShaurmaOrder.Provider value={shaurmaOrderValueForContext}>
          <OrderForm />
        </ContextShaurmaOrder.Provider>
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
