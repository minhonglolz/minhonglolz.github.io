import { ImageProps } from 'next/image'
import { ReactNode } from 'react'

export const experiences = [
  {
    title: '3drens',
    subTitle: 'Software Engineer Intern',
    date: '2021/07 - Present',
    contents: [
      '將現有專案效能優化、抽出重複程式碼，提高可閱讀性，降低維護成本。',
      '設計與開發權限管理和路由架構及撰寫 HDL 文件。',
      '專案導入 ESlint，修復 200+ 錯誤及警告。',
      '專案導入 Hooks，並刪除 40% 冗余程式碼。',
      '開發客製化資訊儀表板、客製化使用者自定義偏好。',
      '定義開發風格規範文件。',
    ],
  },
  {
    title: 'Developer Student Club',
    date: '2020/08',
    subTitle: 'Front End Speaker',
    contents: [
      '是由 Google Developers 所支援的學生開發者社群。',
      '社團人員招募講者。',
      '開發者前端課程講者。',
    ],
  },
  {
    title: '科技部專題研究計畫',
    subTitle: '人工智慧英語學習系統',
    date: '2020/06',
    contents: [
      '透過 English Chatbot 對答的方式練習英語聽力及發音。',
      '根據使用者的英語聽說能力給予適合的語句。',
      '提供查詢單字的功能內容包括音標、例句、同義詞、上位詞和下位詞等資訊。',
    ],
  },
  {
    title: '國立高雄科技大學',
    subTitle: '校內網站開發及維運',
    date: '2020/03',
    contents: [
      '應用德語系網站開發。',
      '產學營運處網站開發。',
    ],
  },
  {
    title: '2021 ZERO HUNGER 黑客松',
    subTitle: '技職盃全國大賽',
    date: '2021/05',
    contents: [
      '分區賽優勝。',
      '蓄勢待發衝擊全國賽。',
      '結果被疫情衝擊ＱＱ。',
    ],
  },
  {
    title: '2018 全國高級中等學校技藝競賽',
    subTitle: '程式競賽 金手獎',
    date: '2018',
    contents: [
      '在高中時期被選為代表學校的選手從而開始了寫 Code 生涯。',
      '也因為這次的機會讓我奠定了我對程式設計的基礎及熱忱。',
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
}

export default function ExperienceContent ({ title, subTitle, children, even, index }: Props) {
  return (
    <div className="w-full flex sm:text-center justify-center">
      <div className={'w-full sm:w-auto lg:min-w-[1024px] md:min-w-[800px] relative px-5 pt-[5rem] pb-[5rem]'}>
        <div className={`absolute hidden md:block  md:text-[12rem] lg:text-[16rem] italic text-white opacity-10 ${even ? '-right-0' : '-left-0 '} top-28 -translate-y-1/2`}>{index > 9 || '0'}{index + 1}</div>
        <div className="self-center">
          <h2 className="text-neutral-100 text-3xl font-bold leading-[60px]">{title}</h2>
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
