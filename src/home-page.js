import { useEffect, useState } from 'react'
import { fetchShaurma } from './api/fetch-array.js'
import { Footer } from './footer/footer.js'
import { Header } from './header/index.js'
import { Main } from './home-content/index.js'

export function PageTemplate() {
  const [shaurmaList, setShaurmaList] = useState(null)
  useEffect(() => {
    async function getShaurma() {
      const shaurmaFromServer = await fetchShaurma()
      setShaurmaList(shaurmaFromServer)
    }
    getShaurma()
  }, [])
  console.log(shaurmaList)

  if (shaurmaList !== null) {
    return (
      <div>
        <Header />
        <Main shaurmaList={shaurmaList} />
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
