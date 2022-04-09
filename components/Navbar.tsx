import { Link } from 'react-scroll'

export const navBarLinks = [
  'About',
  'Experience',
]

export default function Navbar () {
  return (
    <nav className="px-11 flex-1 z-30">
      <ul className="columns justify-end text-right flex">
        {navBarLinks.map((link, index) => (
          <li key={index} className="mx-5 mb-5">
            <Link
              className="
              cursor-pointer
              relative
              after:content-['<']
              after:absolute
              after:left-[-15px]
              after:hidden
              hover:after:inline-block
              before:content-['>']
              before:absolute
              before:right-[-15px]
              before:hidden
              hover:before:inline-block"
              activeClass="active"
              to={`${link.toLowerCase()}`}
              spy={true}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
