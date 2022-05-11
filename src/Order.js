import 'mapbox-gl/dist/mapbox-gl.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { ContextShaurmaList } from './App'
import { Footer } from './footer/footer'
import { Header } from './header'
import { OrderForm } from './order/index'

export const ContextShaurmaOrder = createContext({
  shaurmaOrdered: {},
  setShaurmaOrdered: () => {},
})

export function OrderPage() {
  const { shaurmaList } = useContext(ContextShaurmaList)

  const [shaurmaOrdered, setShaurmaOrdered] = useState()

  const orderValue = { shaurmaOrdered, setShaurmaOrdered }

  useEffect(() => {
    if (shaurmaList !== null) {
      debugger
      function addShaurmanInArray() {
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

      addShaurmanInArray()
    }
  }, [shaurmaList])

  const pageOrder = true
  if (shaurmaList !== null) {
    return (
      <div>
        <Header pageOrder={pageOrder} />
        <ContextShaurmaOrder.Provider value={orderValue}>
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
