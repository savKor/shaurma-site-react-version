import 'mapbox-gl/dist/mapbox-gl.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { fetchAdditive } from './api/fetch-additive-array'
import { ContextShaurmaList } from './App'
import { Footer } from './footer/footer'
import { Header } from './header'
import { OrderForm } from './order/index'

export const ContextAdditiveList = createContext({
  additiveList: [],
  setAdditiveList: () => {},
})

export function OrderPage() {
  const { shaurmaList, setShaurmaList } = useContext(ContextShaurmaList)
  const [additiveList, setAdditiveList] = useState()

  const additive = { additiveList, setAdditiveList }

  useEffect(() => {
    async function getAdditive() {
      const additiveFromServer = await fetchAdditive()
      setAdditiveList(additiveFromServer)
      debugger
    }

    getAdditive()
  }, [])

  console.log(additiveList)
  const pageOrder = true
  if (shaurmaList !== null) {
    return (
      <div>
        <Header pageOrder={pageOrder} />
        <ContextAdditiveList.Provider value={additive}>
          <OrderForm />
        </ContextAdditiveList.Provider>
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
