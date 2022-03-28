import { ReactNode } from 'react'

type Props = {
 children: ReactNode,
 count?:number
}

export function BackgroundTransparentText ({ children }: Props) {
  return (
    <div className="text-[16rem] tracking-[1.5rem] min-w-[1200px]">{children}</div>
  )
}

export function BackgroundTransparentRow ({ children, count = 1 }: Props) {
  const array = new Array<string>(count).fill('')
  return (
    <div className="opacity-[.1] select-none w-full absolute top-[23%] overflow-hidden">
      <div className="animate-scroll flex">
        {array.map((_item, index) => <BackgroundTransparentText key={index}>{children}</BackgroundTransparentText>)}
      </div>
    </div>
  )
}
