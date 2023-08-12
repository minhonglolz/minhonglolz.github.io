import type { NextPage } from 'next'
import { OpacityTextRow } from '../components/OpacityTextRow'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'
import { Menu } from '../components/Menu'
import Navbar, { navbarLinks } from '../components/Navbar'
import Title from '../components/Title'
import ExperienceContent, { experiences } from '../components/ExperienceContent'
import Loading from '../components/Loading'
import { Link, Element } from 'react-scroll'
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
      <div>
        <About/>
        <Element name={navbarLinks.experience.id} className="relative min-h-screen text-white">
          <Title value="Experience"/>
          {experiences.map((item, index) => (
            <ExperienceContent
              key={item.title}
              title={item.title}
              subTitle={item.subTitle}
              date={item.date}
              even={Boolean(index % 2)}
              index={index}
              link={item.link}
            >
              <span className="list-disc tracking-widest">
                {item.contents.map((content, index) =>
                  <p key={index}>{content}</p>
                )}
              </span>
            </ExperienceContent>
          ))}
        </Element>
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
