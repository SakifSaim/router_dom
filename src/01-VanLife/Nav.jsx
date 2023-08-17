import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <Link to={'/'}>#Vanlife</Link>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}> About</NavLink>
      </nav>
    </header>
  )
}

export default Nav
