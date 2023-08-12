import { ImageProps } from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

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
    title: '國立高雄科技大學 NKUST',
    subTitle: '研究助理',
    date: '2020/03',
    contents: [
      '應用德語系 & 產學營運處網站開發並提供 i18n 功能',
    ],
  },
  {
    title: '2021 ZERO HUNGER 黑客松',
    subTitle: '技職盃全國大賽',
    date: '2021/05',
    contents: [
      '分區賽優勝',
      '因疫情取消全國賽止步',
    ],
  },
  {
    title: '2018 全國高級中等學校技藝競賽',
    subTitle: '程式競賽 金手獎',
    date: '2018',
    contents: [
      '在高中時期被選為代表學校的選手從而開始了寫 Code 生涯',
      '也因為這次的機會讓我奠定了我對程式設計的基礎及熱忱',
    ],
  },
]

type Props = {
  title: string,
  subTitle?: string,
  date: string,
  children?: ReactNode,
  image?: ImageProps['src'],
  imageAlt?: string,
  even?: boolean,
  index: number,
  link?: string,
}

export default function ExperienceContent ({ title, subTitle, children, even, index, link }: Props) {
  return (
    <div className="w-full flex sm:text-center justify-center">
      <div className={'w-full sm:w-auto lg:min-w-[1024px] md:min-w-[800px] relative px-5 pt-[5rem] pb-[5rem]'}>
        {/* <div className={`select-none absolute hidden md:block  md:text-[12rem] lg:text-[16rem] italic text-white opacity-10 ${even ? '-right-0' : '-left-0 '} top-28 -translate-y-1/2`}>{index > 9 || '0'}{index + 1}</div> */}
        <div className="self-center">
          {link
            ? <Link href={link} passHref>
              <a target="_blank" className="border-b-2 text-neutral-100 text-3xl font-bold leading-[60px]">{title}</a>
            </Link>
            : <div className="text-neutral-100 text-3xl font-bold leading-[60px]">{title}</div>
          }
          <div>
            {subTitle && <h3 className="text-neutral-200 text-2xl italic self-end leading-[50px]">{subTitle}</h3>}
            <div className="text-neutral-300 sm:text-center text-lg tracking-widest leading-[35px] mt-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
