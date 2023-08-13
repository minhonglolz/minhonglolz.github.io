import { Element } from 'react-scroll'
import { navbarLinks } from '../components/Navbar'
import Title from './Title'
// @ts-ignore
import Parallax from 'react-rellax'

export function About () {
  return (
    <Element name={navbarLinks.about.id} className="relative mt-48">
      <div className="sm:w-full flex flex-col md:flex-row-reverse md:items-center justify-center px-5 text-white relative gap-x-12 gap-y-10">
        {/* <Title value="About"/> */}
        <div className="flex-none md:w-1/2">
          <Parallax speed={2}>
            <div className="
                flex
                flex-wrap
                text-[55px] leading-[55px]
                sm:text-[110px] sm:leading-[110px]
                lg:text-[140px] lg:leading-[140px]
                xl:text-[160px] xl:leading-[160px]
                translate-y-[120px]
                "
            >
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
            </div>
          </Parallax>
          <h4 className="text-xl sm:text-2xl text-[#ed6424]">もう大丈夫だ！なぜって？私が來た！</h4>
        </div>

        <div className="flex-none md:w-1/2 md:text-right">
          <div className="w-full gap-y-5 text-xl sm:text-xl xl:text-2xl leading-[50px] sm:leading-[50px] sm:tracking-[0.1rem] xl:leading-[60px] xl:tracking-[0.2rem]">
            <p>現職前端工程師</p>
            <p>擅長使用 React 和 TypeScript</p>
            <p>追求於撰寫高品質的程式碼</p>
            <p>熱愛分享與交流</p>
            <p>關注前端技術的最新發展和趨勢</p>
            <p>不斷追逐著 Clean Code</p>
            <p>目標是成為自己心目中的英雄</p>
          </div>
        </div>
      </div>
      <div className="select-none w-full text-center absolute top-[80%] hidden md:block md:text-[12rem] lg:text-[16rem] italic text-white opacity-10">I&apos;m MIN</div>
    </Element>
  )
}
