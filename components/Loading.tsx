import { ReactNode, useCallback, AnimationEvent } from 'react'
import useMotto from '../hooks/useMotto'
import animationDelayStyle from '../libs/animationDelayStyle'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import getTargetElement from '../libs/getTargetElement'

type LoadingCharProps = {
  children: ReactNode,
}

function LoadingChar ({ children }: LoadingCharProps) {
  return (
    <span className={'inline-block mx-[5px]'}>{children}</span>
  )
}

const loadingTitle = 'Hero正在努力守護程式碼秩序，就快好了'

const bodyElement = getTargetElement('#body')

const handleStopPropagation = (event: AnimationEvent<HTMLDivElement>) => {
  event.stopPropagation()
}

export default function Loading () {
  const { motto } = useMotto()

  const handleAnimationEnd = useCallback(() => {
    if (!bodyElement) return
    enableBodyScroll(bodyElement)
    return () => clearAllBodyScrollLocks()
  }, [])

  const handleAnimationStart = useCallback(() => {
    if (!bodyElement) return
    disableBodyScroll(bodyElement)
    return () => clearAllBodyScrollLocks()
  }, [])

  return (
    <div
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
      style={animationDelayStyle(3)}
      className="w-full h-full fixed animate-opacity1To0 bg-black z-[999] text-white"
    >
      <div className="w-full h-full flex flex-col justify-center items-center text-xl text-center">
        <div className="flex justify-center animate-opacity0To1">
          <div className="absolute opacity-[.1] text-[20vw] select-none tracking-[1rem]">CLEANING</div>
        </div>
        <div
          style={animationDelayStyle(0.5)}
          onAnimationEnd={handleStopPropagation}
          className="opacity-0 animate-opacity0To1"
        >
          <div>
            <span className="mx-[5px]">&nbsp;&nbsp;&nbsp;</span>
            {[...loadingTitle].map((item, index) => <LoadingChar key={index}>{item}</LoadingChar>)}
            {new Array(3).fill('').map((_, index) => (
              <span
                key={index}
                style={animationDelayStyle(index * 0.3 + 0.3)}
                onAnimationEnd={handleStopPropagation}
                className="after:content-['.'] animate-loadingText select-none mx-[5px]"
              />
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
