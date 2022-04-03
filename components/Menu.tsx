import { useState } from 'react'

export default function Menu () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div
      onClick={toggleMenu}
      className={`
      mt-3
      ml-8
      relative
      w-[50px]
      h-[50px]
      flex
      items-center
      justify-center
      translate-y-[10px]
      transition
      cursor-pointer
      before:transition
      before:absolute
      before:w-[32px]
      before:h-[2px]
      before:bg-white
      before:shadow-[0_10px_0_#fff]
      before:translate-y-[-10px]
      after:transition
      after:absolute
      after:w-[32px]
      after:h-[2px]
      after:bg-white
      after:translate-y-[10px]
      ${open &&
        'before:translate-y-[0px] before:rotate-45 before:shadow-[0_0_0_#fff] after:translate-y-[0px] after:-rotate-45'}
      `}
    />
  )
};
