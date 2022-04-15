import { useEffect, useState } from 'react'
import { fetchShaurma } from './api/fetch-array.js'
import { Footer } from './footer/footer.js'
import { Header } from './header/index.js'
import { MainConten } from './main-content/index.js'
import { storage } from './storage/storage.js'

export function MainPage() {
  const [shaurmaList, setShaurmaList] = useState(null)
  const [storageUser, setStorage] = useState(storage.user)
  useEffect(() => {
    async function getShaurma() {
      debugger
      const shaurmaFromServer = await fetchShaurma()
      setShaurmaList(shaurmaFromServer)
    }

    getShaurma()
  }, [])
  console.log(storageUser)

  if (shaurmaList !== null) {
    return (
      <div>
        <Header shaurmaList={shaurmaList} storageUser={storageUser} />
        <MainConten shaurmaList={shaurmaList} />
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
