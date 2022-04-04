import NavbarLink from './NavbarLink'

export const navBarLinks = [
  'About',
  'Experience',
]

export default function Navbar () {
  return (
    <nav className="px-11 float-right flex-1 z-30">
      <ul className="columns justify-end text-right">
        {navBarLinks.map((link, index) => (
          <li key={index} className="mx-5 mb-5">
            <NavbarLink href={`#${link.toLowerCase()}`}>{link}</NavbarLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
