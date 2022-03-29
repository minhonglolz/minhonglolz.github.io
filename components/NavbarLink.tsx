import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Props = LinkProps & {
 children: ReactNode,
}

export default function NavbarLink ({ children, ...props }: Props) {
  return (
    <Link {...props}>
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
    </Link>
  )
}
