import { useEffect, useState } from 'react'

type Offset = {
 offsetX: number,
 offsetY: number
}

export default function useOffset () {
  const [offset, setOffset] = useState<Offset>()

  useEffect(() => {
    const onScroll = () => {
      setOffset({
        offsetY: window.scrollY,
        offsetX: window.scrollX,
      })
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { offset }
}
