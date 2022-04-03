import { ReactNode } from 'react'
import useMotto from '../hooks/useMotto'

type LoadingCharProps = {
  children: ReactNode,
}

function LoadingChar ({ children }: LoadingCharProps) {
  return (
    <span className={'inline-block mx-[5px]'}>{children}</span>
  )
}

const loadingTitle = 'Hero正在努力守護程式碼秩序，就快好了'

const animationDelayStyle = (seconds: number) => ({ animationDelay: seconds + 's' })

export default function Loading () {
  const { motto } = useMotto()

  return (
    <div className="w-full h-full fixed animate-loadingHidden bg-black z-[999] text-white">
      <div className="w-full h-full flex flex-col justify-center items-center text-xl text-center">
        <div className="flex justify-center animate-loadingShow">
          <div className="absolute opacity-[.1]  text-[20vw] select-none tracking-[1rem]">CLEANING</div>
        </div>
        <div style={animationDelayStyle(0.5)} className="opacity-0 animate-loadingShow">
          <div>
            <span className="mx-[5px]">&nbsp;&nbsp;&nbsp;</span>
            {[...loadingTitle].map((item, index) => <LoadingChar key={index}>{item}</LoadingChar>)}
            {new Array(3).fill('').map((_, index) => (
              <span key={index} style={animationDelayStyle(index * 0.3 + 0.3)} className="after:content-['.'] animate-loadingText select-none mx-[5px]"/>
            ))}
          </div>
          <div className="mt-5 after:content-['”'] before:content-['“']">
            {[...motto].map((item, index) => <LoadingChar key={index}>{item}</LoadingChar>)}
          </div>
        </div>
      </div>
    </div>
  )
};
