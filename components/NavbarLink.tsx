import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Props = LinkProps & {
 children: ReactNode,
}

export default function NavbarLink ({ children, ...props }: Props) {
  return (
    <Link {...props}>
      <a className="
      after:content-['<']
      after:absolute
      after:top-0
      after:left-[-15px]
      after:hidden
      before:content-['>']
      before:absolute
      before:top-0
      before:right-[-15px]
      relative
      before:hidden
      hover:after:block
      hover:before:block"
      >{children}</a>
    </Link>
  )
}
