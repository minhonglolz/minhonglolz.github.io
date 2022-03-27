import NavbarLink from './NavbarLink'

export default function Navbar () {
  return (
    <nav className="px-11 float-right flex-1">
      <ul className="columns justify-end text-right">
        <li className="m-5">
          <NavbarLink href="#about">About</NavbarLink>
        </li>
        <li className="m-5">
          <NavbarLink href="#experience">Experience</NavbarLink>
        </li>
      </ul>
    </nav>
  )
}
