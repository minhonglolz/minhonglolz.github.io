import { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export default function Header ({ children }: Props) {
  return (
    <header className="fixed z-50 text-white flex justify-between w-full">{children}</header>
  )
};
