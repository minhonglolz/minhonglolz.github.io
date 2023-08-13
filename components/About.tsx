import { Element } from 'react-scroll'
import { navbarLinks } from '../components/Navbar'
import Title from './Title'

export function About () {
  return (
    <Element name={navbarLinks.about.id} className="relative">
      <div className="sm:w-auto flex flex-col items-center justify-center text-center px-5 text-white relative  gap-y-10">
        <Title value="About"/>
        <div className="select-none absolute hidden md:block md:text-[12rem] lg:text-[16rem] italic text-white opacity-10">I&apos;m MIN</div>
        <div className="w-full px-5 gap-y-5 text-xl sm:text-2xl leading-[50px] sm:leading-[60px] sm:tracking-[0.2rem]">
          <p>現職前端工程師</p>
          <p>擅長使用 React 和 TypeScript</p>
          <p>追求於撰寫高品質的程式碼</p>
          <p>熱愛分享與交流</p>
          <p>關注前端技術的最新發展和趨勢</p>
          <p>不斷追逐著 Clean Code</p>
          <p>目標是成為自己心目中的英雄</p>
        </div>
        <div className=" text-white -translate-x-1/2 left-1/2
       w-px h-36  bg-white z-30 select-none"
        />
        <h4 className="text-xl sm:text-2xl text-[#ed6424]">もう大丈夫だ！なぜって？私が來た！</h4>
      </div>
    </Element>
  )
}
