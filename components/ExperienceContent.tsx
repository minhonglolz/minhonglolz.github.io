import Image, { ImageProps } from 'next/image'
import { ReactNode } from 'react'

type Props = {
  title: string,
  subTitle?: string,
  date: string,
  children?: ReactNode,
  image: ImageProps['src'],
  imageAlt: string
}

export default function ExperienceContent ({ title, subTitle, date, children, image, imageAlt }: Props) {
  return (
    <div className="mt-[5rem] flex w-full px-[10vw]">
      <div className="w-[60%] flex-col self-center mr-7">
        <div className="flex">
          <h2 className="text-3xl font-bold mr-5">{title}</h2>
          {subTitle && <h3 className="text-2xl mr-5 italic self-end">3drens</h3>}
          <span className="text-base self-end">{date}</span>
        </div>
        <div className="pl-[3rem] mt-3 text-base">
          {children}
        </div>
      </div>
      <div className={'w-[40%] flex flex-1 justify-center items-center'}>
        <Image className="w-full h-auto" src={image} alt={imageAlt}/>
      </div>
    </div>
  )
}
