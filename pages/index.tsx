import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BackgroundTransparentRow } from '../components/BackgroundTransparentText'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import useWindowSize from '../hooks/useWindowSize'
import _3drensLogo from '../assets/images/3drensLogo.png'
import _DSCLogo from '../assets/images/DSCLogo.png'
import ExperienceContent from '../components/ExperienceContent'

const anchor = ['about', 'projects']
const imageWidth = (455 / 1087) * 100

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0)
  const { windowSize } = useWindowSize()

  useEffect(() => {
    const innerHeight = window.innerHeight
    const onScroll = () => setOffset(window.pageYOffset)

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <Header>
        <Logo/>
        <Navbar/>
      </Header>
      <HomeBackground id="home"/>
      <body>
        <section id="about" className="relative h-screen bg-gradient-to-b from-[#130605] via-[#000] to-[#000] text-white">
          <Title value="About"/>
          <div className="text-xl mt-14 text-center leading-[50px]">
            前端工程師<br/>
            在校就學時一年開發經驗<br/>
            實習時一年及四個以上大型專案合作開發經驗<br/>
            擅長使用 React<br/>
            不斷追逐著 Clean Code
          </div>
          <BackgroundTransparentRow count={6}>ABOUT</BackgroundTransparentRow>
          <div className="mt-14 text-center text-xl font-black ">
            <div className="mb-3">&ldquo; TypeScript / React / React Native / Redux / Next &rdquo; <br/></div>
            <div> &ldquo; styled-component / Tailwind CSS / Material UI &rdquo;</div>
          </div>

        </section>
        <section id="experience" className="relative min-h-screen bg-black text-white">
          <Title value="Experience"/>

          <ExperienceContent
            title="Software Engineer Intern"
            subTitle="3drens"
            date="2021/07 - Present"
            image={_3drensLogo}
            imageAlt="3drensLogo"
          >
            <ul className="list-disc tracking-widest">
              <li> 將現有專案效能優化、抽出重複程式碼，提高可閱讀性，降低維護成本。</li>
              <li>設計與開發權限管理和路由架構及撰寫 HDL 文件。</li>
              <li>專案導入 ESlint，修復 200+ 錯誤及警告。</li>
              <li>專案導入 Hooks，並刪除 40% 冗余程式碼。</li>
              <li>開發客製化資訊儀表板、客製化使用者自定義偏好。</li>
              <li>定義開發風格規範文件。</li>
            </ul>
          </ExperienceContent>

          <ExperienceContent
            title="Developer Student Club"
            date="2020/08"
            image={_DSCLogo}
            imageAlt="DSCLogo"
          >
            <span className="list-disc tracking-widest">
              Developer Student Clubs 是 Google Developers 所支援的學生開發者社群，而我在計畫中擔任前端課程導師。
            </span>
          </ExperienceContent>

        </section>
      </body>
      <footer className="pt-28 bg-black"/>
    </div>

  )
}

export default Home
