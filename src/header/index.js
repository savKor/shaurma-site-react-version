import { Navbar } from './navbar/navbar'

export function Header(props) {
  return (
    <header>
      <Navbar pageOrder={props.pageOrder} />
    </header>
  )
}
