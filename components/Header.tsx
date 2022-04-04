import { ReactNode } from 'react'
import animationDelayStyle from '../libs/animationDelayStyle'

type Props = {
  children: ReactNode,
}

export default function Header ({ children }: Props) {
  return (
    <header style={animationDelayStyle(3.8)} className="opacity-0 animate-opacity0To1 transition-opacity fixed z-50 text-white flex justify-between w-full">{children}</header>
  )
};
