import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { OpacityTextRow } from '../components/OpacityTextRow'
import Header from '../components/Header'
import HomeBackground from '../components/HomeBackground'
import { Menu } from '../components/Menu'
import Navbar, { navbarLinks } from '../components/Navbar'
import Title from '../components/Title'
import useWindowSize from '../hooks/useWindowSize'
import ExperienceContent from '../components/ExperienceContent'
import Loading from '../components/Loading'
// @ts-ignore
import { Element } from 'react-scroll'

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0)
  const { windowSize } = useWindowSize()
  const windowHeight = windowSize.height

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <Loading/>
      <Menu/>
      <Header>
        <Navbar/>
      </Header>
      <HomeBackground id="home"/>
      <div>
        <Element name={navbarLinks.about.id} className="relative h-screen bg-gradient-to-b from-[#130605] via-[#000] to-[#000] text-white">
          <Title value="About"/>
          <div className={`px-10 ${windowHeight * 0.6 < offset ? 'opacity-100' : 'opacity-0'} transition-opacity ease-linear`}>
            <div className="text-xl mt-14 text-center leading-[50px]">
              前端工程師<br/>
              在校就學時一年開發經驗<br/>
              實習時一年及四個以上大型專案合作開發經驗<br/>
              擅長使用 React<br/>
              不斷追逐著 Clean Code
            </div>
            <div className="text-neutral-200 mt-14 text-center text-xl font-black ">
              <div className="mb-3">&ldquo; TypeScript / React / React Native / Redux / Next &rdquo; <br/></div>
              <div> &ldquo; styled-component / Tailwind CSS / Material UI &rdquo;</div>
            </div>
          </div>
          <OpacityTextRow count={6}>ABOUT</OpacityTextRow>
        </Element>
        <Element name={navbarLinks.experience.id} className="relative min-h-screen bg-black text-white">
          <Title value="Experience"/>

          <ExperienceContent
            title="3drens"
            subTitle="Software Engineer Intern"
            date="2021/07 - Present"
          >
            <div>
              <p>將現有專案效能優化、抽出重複程式碼，提高可閱讀性，降低維護成本。</p>
              <p>設計與開發權限管理和路由架構及撰寫 HDL 文件。</p>
              <p>專案導入 ESlint，修復 200+ 錯誤及警告。</p>
              <p>專案導入 Hooks，並刪除 40% 冗余程式碼。</p>
              <p>開發客製化資訊儀表板、客製化使用者自定義偏好。</p>
              <p>定義開發風格規範文件。</p>
            </div>
          </ExperienceContent>

          <ExperienceContent
            title="Developer Student Club"
            date="2020/08"
            subTitle="Front End Speaker"
          >
            <span className="list-disc tracking-widest">
              <p>是由 Google Developers 所支援的學生開發者社群。</p>
              <p>社團人員招募講者。</p>
              <p>開發者前端課程講者。</p>
            </span>
          </ExperienceContent>
          <ExperienceContent
            title="科技部專題研究計畫"
            subTitle="人工智慧英語學習系統"
            date="2020/06"
          >
            <span className="list-disc tracking-widest">
              <p>透過 English Chatbot 對答的方式練習英語聽力及發音。</p>
              <p>根據使用者的英語聽說能力給予適合的語句。</p>
              <p>提供查詢單字的功能內容包括音標、例句、同義詞、上位詞和下位詞等資訊。</p>
            </span>
          </ExperienceContent>
          <ExperienceContent
            title="國立高雄科技大學"
            subTitle="校內網站開發及維運"
            date="2020/03"
          >
            <span className="list-disc tracking-widest">
              <p>應用德語系網站開發。</p>
              <p>產學營運處網站開發。</p>
            </span>
          </ExperienceContent>
          <ExperienceContent
            title="2021 ZERO HUNGER 黑客松"
            subTitle="技職盃全國大賽"
            date="2021/05"
          >
            <span className="list-disc tracking-widest">
              <p>分區賽優勝。</p>
              <p>蓄勢待發衝擊全國賽。</p>
              <p>結果被疫情衝擊ＱＱ。</p>
            </span>
          </ExperienceContent>
          <ExperienceContent
            title="2018 全國高級中等學校技藝競賽"
            subTitle="程式競賽 金手獎"
            date="2018"
          >
            <span className="list-disc tracking-widest">
              <p>在高中時期被選為代表學校的選手從而開始了寫 Code 生涯。</p>
              <p>也因為這次的機會讓我奠定了我對程式設計的基礎及熱忱。</p>
            </span>
          </ExperienceContent>
        </Element>
      </div>
      <footer className="pt-28 bg-black"/>
    </div>

  )
}

export default Home
