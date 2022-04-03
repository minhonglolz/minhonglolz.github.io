import { useEffect, useState } from 'react'

const mottos = [
  '離開營地前，讓營地比使用前更加乾淨',
  '閱讀程式的時間比寫程式的時間還多，因此讓程式碼容易讀也會讓程式碼容易寫',
  '可讀性能夠幫助他人和自己更快學習',
  '真相只能在一個地方找到：the code',
]

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export default function useMotto () {
  const [motto, setMotto] = useState('')

  useEffect(() => {
    setMotto(mottos[getRandomInt(mottos.length)])
  }, [])

  return { motto }
};
