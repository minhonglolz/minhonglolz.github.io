import type { NextPage } from 'next'
import background from '../assets/images/cleanersBG.jpg'
import NavbarLink from '../components/NavbarLink'

const Home: NextPage = () => {
  return (
    <div>
      <div
        className="text-white h-screen w-full bg-cover bg-center flex"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <h1 className="pb-[10vh] pl-[4vw] self-end w-[20%] text-left text-3xl leading-[60px]">
          Min<br/>
          Website<br/>
        </h1>
        <nav className="py-5 px-11 float-right flex-1">
          <ul className="columns justify-end text-right">
            <li className="m-5">
              <NavbarLink href="/">About</NavbarLink>
            </li>
            <li className="m-5">
              <NavbarLink href="/">Projects</NavbarLink>
            </li>
          </ul>
        </nav>
      </div>
      <body>
        <section id="about" className="h-screen bg-gradient-to-b from-[#130605] via-[#000] to-[#000] text-white">
          <div className=" text-center pt-20 flex justify-center items-center">
            <span className="text-6xl">{'<'}</span>
            <span className="text-4xl mx-10">About</span>
            <span className="text-6xl">{'>'}</span>
          </div>
          <div className="text-xl mt-14 text-center leading-[50px]">
            前端工程師<br/>
            國立高雄科技大學 資訊管理系<br/>
            在校就學時一年開發經驗<br/>
            實習時一年及四個以上大型專案合作開發經驗<br/>
            擅長使用 React<br/>
            不斷追逐著 Clean Code
          </div>
          <div className="mt-14 text-center text-xl font-black">
            [ TypeScript / React / React Native / React Hook / Redux / Next / style-component / Tailwind CSS / Material UI / ]
          </div>
        </section>
      </body>
    </div>

  )
}

export default Home
