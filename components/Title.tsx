import { useEffect, useState } from 'react'

type Props = {
  value: string,
}

export default function Title ({ value }: Props) {
  return (
    <div className="w-full text-white transition-opacity text-center pt-20 flex justify-center items-center ease-linear mb-6">
      <span className="select-none text-4xl px-5 font-bold">{value}</span>
    </div>
  )
};
