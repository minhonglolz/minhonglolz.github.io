import { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  count?: number,
}

export function OpacityText ({ children }: Props) {
  return (
    <div className="text-[16rem] leading-[14rem] tracking-[1.5rem] min-w-[1200px]">{children}</div>
  )
}

export function OpacityTextRow ({ children, count = 1 }: Props) {
  const array = new Array<string>(count).fill('')
  return (
    <div className="opacity-[.1] select-none w-full absolute top-[23%] overflow-hidden">
      <div className="animate-scroll flex">
        {array.map((_item, index) => <OpacityText key={index}>{children}</OpacityText>)}
      </div>
    </div>
  )
}
