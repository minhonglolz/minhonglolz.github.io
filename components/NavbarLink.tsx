import { ReactNode } from 'react'

type Props = {
  children: ReactNode,
}

export default function NavbarLink ({ children, ...props }: Props) {
  return (
    <div {...props}>
      <div className="
      relative
      after:content-['<']
      after:absolute
      after:left-[-15px]
      after:hidden
      hover:after:inline-block
      before:content-['>']
      before:absolute
      before:right-[-15px]
      before:hidden
      hover:before:inline-block"
      >{children}</div>
    </div>
  )
}
