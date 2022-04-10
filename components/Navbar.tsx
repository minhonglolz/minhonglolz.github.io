import NavbarLink from './NavbarLink'
// @ts-ignore
import { Link } from 'react-scroll'
import { HTMLAttributes } from 'react'

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

export default function Navbar (props: HTMLAttributes<'div'>) {
  return (
    <nav className={`${props.className} px-11 flex-1 z-30`}>
      <ul className="columns justify-end text-right flex">
        {Object.values(navbarLinks).map(({ title, id }, index) => (
          <li key={index} className="ml-10">
            <Link className="cursor-pointer" activeClass="active" to={id} spy={true} duration={500}>
              <NavbarLink>{title}</NavbarLink>
            </Link>
          </li>
        ))}
      </ul>
    </nav>

  )
}
