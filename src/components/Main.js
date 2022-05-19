import { Footer } from './footer/index.js'
import { Header } from './header/index.js'
import { MainConten } from './main-content/index.js'
import { getShaurma } from '../action/index.js'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectState,
  updateShaurmaList,
} from '../features/counter/storageSlice.js'
import { useEffect } from 'react'

export function MainPage() {
  const dispatch = useDispatch()
  const store = useSelector(selectState)
  const shaurmaList = store.shaurmaList

  async function setData() {
    const dataFromServer = await getShaurma()
    dispatch(updateShaurmaList(dataFromServer))
  }

  useEffect(() => {
    setData()
  }, [])

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
