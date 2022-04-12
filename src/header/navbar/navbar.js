import { Logo } from './logo/logo'
import { Navigation } from './navigation/navigation'

export function Navbar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Logo />
        <Navigation />
      </div>
    </div>
  )
}
