import { Navbar } from './navbar'

export function Header(props) {
  return (
    <header>
      <Navbar pageOrder={props.pageOrder} />
    </header>
  )
}
