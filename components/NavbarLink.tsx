import { ReactElement, ReactNode } from 'react'

type Props = ReactElement & {
  children: ReactNode,
}

export default function NavbarLink ({ children, ...props }: Props) {
  return (
    <div {...props}>
      <a className="
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
      >{children}</a>
    </div>
  )
}
