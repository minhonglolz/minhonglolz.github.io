import { ReactNode } from 'react'

type LoadingTextProps = {
  children: ReactNode
}

const ladingText = 'Hero正在努力守護程式碼秩序，就快好了'

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

export default function Loading () {
  return (
    <div className="fixed w-full h-full bg-black z-[999]">
      <div className="w-full h-full flex flex-col justify-center items-center text-xl">
        <div>
          <span className="mx-[5px]">...</span>
          {[...ladingText].map((item, index) => <LoadingText key={index}>{item}</LoadingText>)}
          <span style={{ animationDelay: '.3s' }} className="animate-loadingText mx-[5px]">.</span>
          <span style={{ animationDelay: '.6s' }} className="animate-loadingText mx-[5px]">.</span>
          <span style={{ animationDelay: '.9s' }} className="animate-loadingText mx-[5px]">.</span>
        </div>
        <div className="mt-5">
          {[...goldenSentence[getRandomInt(goldenSentence.length)]].map((item, index) => <LoadingText key={index}>{item}</LoadingText>)}
        </div>

      </div>
    </div>
  )
};
