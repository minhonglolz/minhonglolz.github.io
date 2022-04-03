import { ReactNode, useRef } from 'react'

type LoadingTextProps = {
  children: ReactNode
}

const loadingTitle = 'Hero正在努力守護程式碼秩序，就快好了'

const goldenSentence = [
  '"離開營地前，讓營地比使用前更加乾淨"',
  '"閱讀程式的時間比寫程式的時間還多，因此讓程式碼容易讀也會讓程式碼容易寫"',
  '"可讀性能夠幫助他人和自己更快學習"',
  '"真相只能在一個地方找到：the code"',
]

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

function LoadingText ({ children }: LoadingTextProps) {
  return (
    <span className={'inline-block mx-[5px] text-white'}>{children}</span>
  )
}

const animationDelayStyle = (seconds: string) => ({ animationDelay: seconds })

export default function Loading () {
  const goldenSentenceRef = useRef(goldenSentence[getRandomInt(goldenSentence.length)])

  return (
    <div className="animate-loadingHidden fixed w-full h-full bg-black z-[999]">
      <div className="w-full h-full flex flex-col justify-center items-center text-xl text-center">
        <div className="animate-loadingShow flex justify-center">
          <div className="absolute opacity-[.1] text-white text-[20vw] tracking-[1rem]">CLEANING</div>
        </div>
        <div style={animationDelayStyle('.5s')} className="opacity-0 animate-loadingShow ">
          <div>
            <span className="mx-[5px]">&nbsp;&nbsp;&nbsp;</span>
            {[...loadingTitle].map((item, index) => <LoadingText key={index}>{item}</LoadingText>)}
            <span style={animationDelayStyle('.3s')} className="animate-loadingText mx-[5px]">.</span>
            <span style={animationDelayStyle('.6s')} className="animate-loadingText mx-[5px]">.</span>
            <span style={animationDelayStyle('.9s')} className="animate-loadingText mx-[5px]">.</span>
          </div>
          <div className="mt-5 ">
            <LoadingText>{goldenSentenceRef.current}</LoadingText>
          </div>
        </div>
      </div>
    </div>
  )
};
