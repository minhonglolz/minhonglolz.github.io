import { useEffect, useState } from 'react'

type Props = {
  value: string,
}

export default function Title ({ value }: Props) {
  const [offset, setOffset] = useState(0)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const innerHeight = window.innerHeight
    const onScroll = () => setOffset(window.pageYOffset)
    if (innerHeight * 0.5 < offset) {
      setShowText(true)
    } else {
      setShowText(false)
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return (
    <div className={`${showText ? 'opacity-100' : 'opacity-0'} transition-opacity text-center pt-20 flex sm:justify-center items-center ease-linear`}>
      <span className="text-4xl px-5 font-bold after:content-['>'] after:ml-3  before:content-['<'] before:mr-3">{value}</span>
    </div>
  )
};
