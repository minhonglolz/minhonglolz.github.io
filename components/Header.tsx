import { ReactNode } from 'react'
import animationDelayStyle from '../libs/animationDelayStyle'

type Props = {
  children: ReactNode,
}

export default function Header ({ children }: Props) {
  return (
    <header style={animationDelayStyle(3.8)} className="z-30 mt-10 opacity-0 animate-opacity0To1 transition-opacity fixed text-white flex justify-between w-full">{children}</header>
  )
};
