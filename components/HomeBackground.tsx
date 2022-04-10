
import { HTMLAttributes } from 'react'
import background from '../assets/images/cleanersBG.jpg'
import animationDelayStyle from '../libs/animationDelayStyle'
import { navbarLinks } from './Navbar'
// @ts-ignore
import { Link } from 'react-scroll'

export default function HomeBackground (props: HTMLAttributes<'div'>) {
  return (
    <div className="bg-black relative">
      <Link
        className="cursor-pointer z-20 text-white absolute bottom-0 -translate-y-6 -translate-x-1/2 left-1/2
        before:absolute before:left-1/2 before:bottom-0 before:w-px before:translate-y-6 before:h-6 before:bg-white before:z-30 select-none"
        to={navbarLinks.about.id}
        spy={true}
        duration={500}
      >
        SCROLL
      </Link>
      <div
        id={props.id}
        className="text-white h-screen w-full bg-cover bg-center flex pt-5 opacity-0 animate-opacity0To1"
        style={{ backgroundImage: `url(${background.src})`, ...animationDelayStyle(3.3) }}
      >
        <div/>
      </div>
    </div>

  )
};
