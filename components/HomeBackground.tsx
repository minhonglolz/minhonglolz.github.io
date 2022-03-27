
import { HTMLAttributes } from 'react'
import background from '../assets/images/cleanersBG.jpg'

export default function HomeBackground (props: HTMLAttributes<'div'>) {
  return (
    <div
      id={props.id}
      className="text-white h-screen w-full bg-cover bg-center flex pt-5"
      style={{ backgroundImage: `url(${background.src})` }}
    />
  )
};
