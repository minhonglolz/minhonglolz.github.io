import NavbarLink from './NavbarLink'

const navBarLinks = [
  'About',
  'Experience',
]

export default function Navbar () {
  return (
    <nav className="px-11 float-right flex-1">
      <ul className="columns justify-end text-right">
        {navBarLinks.map((link, index) => (
          <li key={index} className="m-5">
            <NavbarLink href={`#${link.toLowerCase()}`}>{link}</NavbarLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
