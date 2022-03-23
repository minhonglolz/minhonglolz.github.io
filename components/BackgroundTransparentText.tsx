import { ReactNode } from 'react'

type Props = {
 children: ReactNode,
 count?:number
}

export function BackgroundTransparentText ({ children }: Props) {
  return (
    <div className="text-9xl tracking-[8px] min-w-[600px]">{children}</div>
  )
}

export function BackgroundTransparentRow ({ children, count = 1 }: Props) {
  const array = new Array<string>(count).fill('')
  return (
    <div className="opacity-[.02] select-none w-full absolute top-[45%] overflow-hidden">
      <div className="animate-scroll flex">
        {array.map((_item, index) => <BackgroundTransparentText key={index}>{children}</BackgroundTransparentText>)}
      </div>
    </div>
  )
}
