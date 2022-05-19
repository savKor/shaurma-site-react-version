import 'mapbox-gl/dist/mapbox-gl.css'
import { Footer } from './footer'
import { Header } from './header'
import { OrderForm } from './order/index'
import { getShaurma } from '../action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectState,
  updateShaurmaList,
} from '../features/counter/storageSlice'

export function OrderPage() {
  const store = useSelector(selectState)
  const dispatch = useDispatch()
  const shaurmaList = store.shaurmaList

  async function setData() {
    const dataFromServer = await getShaurma()
    dispatch(updateShaurmaList(dataFromServer))
  }

  useEffect(() => {
    setData()
  }, [])

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
