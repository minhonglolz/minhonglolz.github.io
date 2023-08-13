import Title from './Title'

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
    subTitle: '程式競賽 金手獎',
    date: '2018',
    contents: [
      '在高中時期被選為代表學校的選手從而開始了寫 Code 生涯',
      '也因為這次的機會讓我奠定了我對程式設計的基礎及熱忱',
    ],
  },
]

export default function ExperienceContent () {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center text-neutral-200 gap-y-10">
      <Title value="Experience"/>
      <div className={'flex flex-col w-full sm:w-auto lg:min-w-[1024px] md:min-w-[800px] relative gap-y-10'}>
        {experiences.map(({ subTitle, title, date }) => (
          <div key={title} className="flex justify-center gap-x-2 sm:text-center text-xl tracking-[0.1rem]">
            {title}
            <p>-</p>
            {subTitle && <h3>{subTitle}</h3>}
            <p className="text-sm self-end">{date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
