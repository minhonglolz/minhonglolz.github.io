import { ImageProps } from 'next/image'
import { ReactNode } from 'react'

type Props = {
  title: string,
  subTitle?: string,
  date: string,
  children?: ReactNode,
  image: ImageProps['src'],
  imageAlt: string,
}

export default function ExperienceContent ({ title, subTitle, children }: Props) {
  return (
    <div className="pt-[5rem] pb-[5rem] flex text-center justify-center w-full px-[10vw] ">
      <div className="self-center w-[70%]">
        <h2 className="text-neutral-100 text-3xl font-bold leading-[60px]">{title}</h2>
        <div>
          {subTitle && <h3 className="text-neutral-200 text-2xl italic self-end leading-[50px]">{subTitle}</h3>}
          <div className="text-neutral-300 text-center text-lg tracking-widest leading-[35px] mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
