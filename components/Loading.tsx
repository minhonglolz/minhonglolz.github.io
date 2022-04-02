import { ReactNode } from 'react'

type LoadingTextProps = {
  children: ReactNode
  delay: number
}

const LoadingText = ({ children }: LoadingTextProps) => {
  return (
    <span className={'animate-loadingText inline-block mx-[5px] text-white'}>{children}</span>
  )
}

type Props = {
  value: string
}

export default function Loading ({ value }: Props) {
  return (
    <div className="fixed w-full h-full bg-black z-[999]">
      <div className="w-full h-full flex justify-center items-center">
        {[...value].map((item, index) => <LoadingText key={index} delay={index}>{item}</LoadingText>)}
      </div>
    </div>
  )
};
