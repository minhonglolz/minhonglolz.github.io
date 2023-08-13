import type { NextPage } from 'next'
import { OpacityTextRow } from '../components/OpacityTextRow'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'
import { Menu } from '../components/Menu'
import Navbar, { navbarLinks } from '../components/Navbar'
import ExperienceContent from '../components/ExperienceContent'
import Loading from '../components/Loading'
import { Link } from 'react-scroll'
import { About } from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Loading/>
      <Menu/>
      <Header>
        <Navbar/>
      </Header>
      <HomeBackground/>
      <div className="p-6">
        <About/>
        <ExperienceContent/>
      </div>
      <section className="relative h-[300px] text-white">
        <OpacityTextRow count={6}>CLEAN</OpacityTextRow>
      </section>
      <footer className="text-white w-full sm:w-[90%] mx-auto p-5">
        <div className="flex flex-col sm:flex-row justify-between relative before:absolute before:-bottom-3 before:w-full before:h-[2px] before:bg-white sm:items-end">
          <Link className="mr-auto cursor-pointer" activeClass="active" to={'home'} spy={true} duration={500}>
            <h1 className="text-4xl mb-3 sm:mb-0">Min</h1>
          </Link>
          <div>
            {Object.values(navbarLinks).map(({ title, id }) => (
              <Link key={id} className="mr-5 cursor-pointer" activeClass="active" to={id} spy={true} duration={500}>
                {title}
              </Link>
            ))}
            <a href="https://github.com/minhonglolz"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </div>

        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between">
          <span>Hero.</span>
          <span>© Minhong. All Rights Reserved.</span>
        </div>
      </footer>
    </div>

  )
}

export default Home
