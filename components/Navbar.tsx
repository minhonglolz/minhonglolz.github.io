import NavbarLink from './NavbarLink'
// @ts-ignore
import { Link } from 'react-scroll'

export const navbarLinks = {
  about: {
    title: 'About',
    id: 'about',
  },
  experience: {
    title: 'Experience',
    id: 'experience',
  },
}

export default function Navbar () {
  return (
    <nav className="px-11 flex-1 z-30">
      <ul className="columns justify-end text-right flex">
        {Object.values(navbarLinks).map(({ title, id }, index) => (
          <li key={index} className="mx-5 mb-5">
            <Link className="cursor-pointer" activeClass="active" to={id} spy={true} duration={500}>
              <NavbarLink>{title}</NavbarLink>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
