import { ListOfCards } from './list/shaurma-list'

export function Main(props) {
  const shaurmaList = props.shaurmaList
  return (
    <main id="main-form">
      <main id="main-form">
        <div className="container">
          <div
            id="card-list"
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-md-4 g-3"
          >
            <ListOfCards shaurmaList={shaurmaList} />
          </div>
        </div>
      </main>
    </main>
  )
}
