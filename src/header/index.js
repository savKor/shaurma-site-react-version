import { Navbar } from './navbar/navbar'

export function Header(props) {
  return (
    <header>
      <Navbar shaurmaList={props.shaurmaList} />
    </header>
  )
}
