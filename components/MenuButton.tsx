import useToggle from '../hooks/useToggle'
import { navBarLinks } from '../components/Navbar'
import { useCallback } from 'react'
import animationDelayStyle from '../libs/animationDelayStyle'

type MenuButtonProps = {
  open: boolean,
  toggle: () => void,
}

export default function MenuButton ({ open, toggle }: MenuButtonProps) {
  return (
    <div
      onClick={toggle}
      style={animationDelayStyle(3.8)}
      className={`
      opacity-0 animate-opacity0To1 transition-opacity
      mt-8 z-50 fixed ml-11 w-[28px] h-[28px] flex items-center justify-center 
      transition cursor-pointer before:transition before:absolute 
      before:w-[28px] before:h-[2px] before:bg-white 
      after:transition after:absolute after:w-[28px] after:h-[2px] after:bg-white after:translate-y-[10px]
      ${open &&
        'before:translate-y-[0px] before:rotate-45 after:translate-y-[0px] after:-rotate-45'}
      `}
    />
  )
};

const encourages = [
  'Be a code cleaner.',
  'Help yourself.',
  'Help others.',
]

function Encourages () {
  return (
    <>
      {encourages.map((encourage, index) => <p className="text-[32px]" key={index}>{encourage}</p>)}
    </>
  )
}

export function Menu () {
  const { state: open, toggle } = useToggle(false)
  const handleClickLink = useCallback(() => {
    toggle()
  }, [toggle])
  return (
    <div>
      <MenuButton open={open} toggle={toggle}/>
      <div className={`${open ? 'opacity-100' : 'opacity-0'}
      transition-opacity duration-500 z-40 fixed bg-[#ff641e] h-[100vh] w-full 
      flex flex-col justify-center items-center`}
      >
        <div className="flex-1 p-9 max-w-[1024px] w-full flex text-white text-start">
          <div className="my-auto flex-1"><h1 className="text-[48px]">Minhong</h1></div>
          <div className="flex-1 text-[32px] flex flex-col items-start justify-center">
            {navBarLinks.map((link, index) =>
              <a onClick={handleClickLink}
                key={index}
                href={`#${link.toLowerCase()}`}
                className="mb-4 hover:translate-x-2 transition-transform"
              >{link}</a>)
              }
          </div>
          <div className="flex-1 my-auto">
            <Encourages/>
            <div className="before:w-full h-px bg-white my-10"/>
            <div>
              <a
                href="https://github.com/minhonglolz"
                target="_blank"
                className="text-[26px] relative block hover:translate-x-2 transition-transform
                before:w-7 before:h-[2px] before:bg-white before:absolute
                before:bottom-[11px] before:left-[90px]
                after:w-2 after:h-[2px] after:bg-white after:absolute
                after:top-[24px] after:left-[110px] after:rotate-[30deg]" rel="noreferrer"
              >Github</a>
              <div className="text-lg mt-3">Mail: z574512z@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="text-white max-w-[1024px] p-9 w-full flex justify-between">
          <span className="mr-auto">Hero.</span>
          <span>© Minhong. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  )
};
