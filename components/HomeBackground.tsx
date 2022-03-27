
import { HTMLAttributes } from 'react'
import background from '../assets/images/cleanersBG.jpg'

export default function HomeBackground (props: HTMLAttributes<'div'>) {
  return (
    <div
      id={props.id}
      className="text-white h-screen w-full bg-cover bg-center flex pt-5"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="animate-arrow absolute right-[50%] bottom-[10%]">
        <div className='before:content-[">"] font-thin text-white opacity-80 text-5xl rotate-90'/>
      </div>
      <div/>
    </div>
  )
};
