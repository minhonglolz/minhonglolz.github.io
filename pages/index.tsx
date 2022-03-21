import type { NextPage } from 'next'
import background from '../assets/images/cleanersBG.jpg'
import NavbarLink from '../components/NavbarLink'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${background.src})` }}>
      <header className="text-white py-5 px-11">
        <ul className="flex justify-end">
          <li className="m-5">
            <NavbarLink href="/">About</NavbarLink>
          </li>
          <li className="m-5">
            <NavbarLink href="/">Projects</NavbarLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Home
