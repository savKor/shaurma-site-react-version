import { ListOfCards } from './list/shaurma-list'

export function MainConten(props) {
  const shaurmaList = props.shaurmaList
  return (
    <main id="main-form">
      <div className="container">
        <ListOfCards shaurmaList={shaurmaList} />
      </div>
    </main>
  )
}
