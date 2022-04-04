
import { HTMLAttributes } from 'react'
import background from '../assets/images/cleanersBG.jpg'
import animationDelayStyle from '../libs/animationDelayStyle'

export default function HomeBackground (props: HTMLAttributes<'div'>) {
  return (
    <div className="bg-black">
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
