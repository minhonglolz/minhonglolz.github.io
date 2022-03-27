import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BackgroundTransparentRow } from '../components/BackgroundTransparentText'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import useWindowSize from '../hooks/useWindowSize'

const anchor = ['about', 'projects']

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0)
  const { windowSize } = useWindowSize()

  useEffect(() => {
    const innerHeight = window.innerHeight
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  // console.log(innerHeight, offset)
  // useEffect(() => {

  // }, [])

  return (
    <div>
      <Header>
        <Logo/>
        <Navbar/>
      </Header>
      <HomeBackground/>
      <body>
        <section id="about" className="relative h-screen bg-gradient-to-b from-[#130605] via-[#000] to-[#000] text-white">
          <div className=" text-center pt-20 flex justify-center items-center">
            <span className="text-6xl">{'<'}</span>
            <span className="text-4xl mx-10 font-bold">About</span>
            <span className="text-6xl">{'>'}</span>
          </div>
          <div className="text-xl mt-14 text-center leading-[50px]">
            前端工程師<br/>
            在校就學時一年開發經驗<br/>
            實習時一年及四個以上大型專案合作開發經驗<br/>
            擅長使用 React<br/>
            不斷追逐著 Clean Code
          </div>
          <BackgroundTransparentRow count={12}>ABOUT</BackgroundTransparentRow>
          <div className="mt-14 text-center text-xl font-black ">
            <div className="mb-3">&ldquo; TypeScript / React / React Native / Redux / Next &rdquo; <br/></div>
            <div> &ldquo; styled-component / Tailwind CSS / Material UI &rdquo;</div>
          </div>

        </section>
        <section id="projects" className="relative h-screen bg-gradient-to-b from-[#130605] via-[#000] to-[#000] text-white">
          <div className=" text-center pt-20 flex justify-center items-center">
            <span className="text-6xl">{'<'}</span>
            <span className="text-4xl mx-10 font-bold">About</span>
            <span className="text-6xl">{'>'}</span>
          </div>
          <div className="text-xl mt-14 text-center leading-[50px]">
            前端工程師<br/>
            在校就學時一年開發經驗<br/>
            實習時一年及四個以上大型專案合作開發經驗<br/>
            擅長使用 React<br/>
            不斷追逐著 Clean Code
          </div>
          <BackgroundTransparentRow count={12}>ABOUT</BackgroundTransparentRow>
          <div className="mt-14 text-center text-xl font-black ">
            <div className="mb-3">&ldquo; TypeScript / React / React Native / Redux / Next &rdquo; <br/></div>
            <div> &ldquo; styled-component / Tailwind CSS / Material UI &rdquo;</div>
          </div>

        </section>
      </body>
    </div>

  )
}

export default Home
