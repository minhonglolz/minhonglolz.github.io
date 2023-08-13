import { navbarLinks } from './Navbar'
import { Element } from 'react-scroll'
// @ts-ignore
import Parallax from 'react-rellax'

export const experiences = [
  {
    title: '3drens',
    subTitle: 'Frontend Software Engineer',
    date: '2021/07 - Present',
    contents: [
      '為團隊導入強型別語言和多項開發輔助工具，建立團隊規範確保程式品質',
      '建立自動化測試流程和產出報表幫助排查，提高產品可靠性',
      '設計並實作角色權限系統，提高用戶工作效率、提升系統安全性',
      '開發自動化 i18n，提高團隊開發效率，且為此開發 Chrome Extension 提升使用體驗',
    ],
  },
  {
    title: 'Developer Student Club',
    date: '2020/08',
    subTitle: 'Frontend Speaker',
    link: 'https://developers.google.com/community/gdsc?hl=zh-tw',
    contents: [
      '是由 Google Developers 所支援的學生開發者社群',
      '擔任前端開發課程講者',
    ],
  },
  {
    title: '科技部專題研究計畫',
    subTitle: '人工智慧英語學習系統',
    date: '2020/06',
    link: 'https://minhonglolz.github.io/EC_FrontEnd/#/',
    contents: [
      '人工智慧英語學習系統透過自然語言 AI 模組建立語音對話機器',
    ],
  },
  {
    title: 'ZERO HUNGER 黑客松',
    subTitle: '技職盃全國大賽',
    date: '2021/05',
    contents: [
      '分區賽優勝',
      '因疫情取消全國賽止步',
    ],
  },
  {
    title: '全國高級中等學校技藝競賽',
    subTitle: '程式競賽金手獎',
    date: '2018/10',
    contents: [
      '在高中時期被選為代表學校的選手從而開始了寫 Code 生涯',
      '也因為這次的機會讓我奠定了我對程式設計的基礎及熱忱',
    ],
  },
]

function ExperienceListMD () {
  return (
    <div className="hidden md:flex flex-col w-[60%] sm:w-auto relative gap-y-6 mt-64">
      {experiences.map(({ subTitle, title, date }) => (
        <div key={title} className="flex md:justify-start flex-wrap gap-x-2 text-xl tracking-[0.1rem]">
          <div className="flex w-full justify-start">
            {title}
            <p>-</p>
            {subTitle && <h3>{subTitle}</h3>}
          </div>
          <span className="text-sm self-end">{date}</span>
        </div>
      ))}
    </div>
  )
}
function ExperienceListSM () {
  return (
    <div className="flex flex-col sm:w-auto relative gap-y-6">
      {experiences.map(({ subTitle, title, date }) => (
        <div key={title} className="flex md:hidden md:justify-end flex-wrap gap-x-2 text-lg tracking-[0.1rem]">
          <div className="flex w-full flex-col">
            {title}
            <p className="hidden sm:block">-</p>
            {subTitle && <h3>{subTitle}</h3>}
          </div>
          <span className="text-sm self-end">{date}</span>
        </div>
      ))}
    </div>
  )
}

export default function ExperienceContent () {
  return (
    <Element name={navbarLinks.experience.id} className="relative min-h-screen text-white mt-64">
      <div className="w-full flex items-center justify-center text-neutral-200 gap-x-12">
        {/* <Title value="Experience"/> */}

        <div className="self-start md:w-[40%] w-full">
          <Parallax speed={2}>
            <div className="
          flex
          sm:flex-col
          text-[55px] leading-[55px]
          sm:text-[120px] sm:leading-[120px]
          lg:text-[150px] lg:leading-[150px]
          xl:text-[180px] xl:leading-[180px]
          translate-y-[300px]
          "
            >
              <div>
                <span>E</span>
                <span>X</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
              </div>
              <div className="sm:ml-[140px] sm:-translate-y-[30px]">
                <span>I</span>
                <span>E</span>
                <span>N</span>
                <span>C</span>
                <span>E</span>
              </div>
            </div>
          </Parallax>
          <div className="self-start text-xl sm:text-2xl mt-10 mb-10 sm:mt-10 sm:mb-0 sm:-translate-y-[50px] text-neutral-200">
            <div className="mb-3">Skill<br/></div>
            <div className="mb-3">&ldquo; TypeScript / React / Redux / Next.js &rdquo; <br/></div>
            <div> &ldquo; Tailwind CSS / Material UI &rdquo;</div>
          </div>
          <ExperienceListSM/>
        </div>
        <ExperienceListMD/>
      </div>
    </Element>
  )
}
