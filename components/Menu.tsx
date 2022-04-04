import { useState } from 'react'

export default function Menu () {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div
      onClick={toggleMenu}
      className={`mt-3 ml-8 relative w-[50px] h-[50px] flex items-center justify-center 
      transition cursor-pointer before:transition before:absolute 
      before:w-[28px] before:h-[2.5px] before:bg-white 
      after:transition after:absolute after:w-[28px] after:h-[2.5px] after:bg-white after:translate-y-[10px]
      ${open &&
        'before:translate-y-[0px] before:rotate-45 after:translate-y-[0px] after:-rotate-45'}
      `}
    />
  )
};
