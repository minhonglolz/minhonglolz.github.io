import { OpacityTextRow } from './OpacityTextRow'
import { Element } from 'react-scroll'
import { navbarLinks } from '../components/Navbar'

export function About () {
  return (
    <Element name={navbarLinks.about.id}>
      <div className="flex flex-col items-center justify-center sm:text-center px-5 text-white relative h-[100vh] gap-y-10">
        <div className="select-none absolute hidden md:block md:text-[12rem] lg:text-[16rem] italic text-white opacity-10">I&apos;m MIN</div>
        <div className="gap-5 text-2xl mt-6 leading-[60px] tracking-[0.2rem]">
          <p>現職前端工程師</p>
          <p>擅長使用 React 和 TypeScript</p>
          <p>追求於撰寫高品質的程式碼</p>
          <p>熱愛分享與交流</p>
          <p>關注前端技術的最新發展和趨勢</p>
          <p>不斷追逐著 Clean Code</p>
          <p>目標是成為自己心目中的英雄</p>
        </div>
        <div className="cursor-pointer z-20 text-white   -translate-x-1/2 left-1/2
        before:absolute before:left-1/2 before:bottom-0 before:w-px h-24 before:h-24 before:bg-white before:z-30 select-none"
        />
        <h4 className="text-2xl text-[#ed6424]">もう大丈夫だ！なぜって？私が來た！</h4>
      </div>
      <OpacityTextRow count={6}>ABOUT</OpacityTextRow>
    </Element>
  )
}
