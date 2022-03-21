import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Props = LinkProps & {
 children: ReactNode,
}

export default function NavbarLink ({ children, ...props }: Props) {
  return (
    <Link {...props}>
      <a className="before:transition-all before:duration-200 before:w-0 before:absolute hover:before:w-full before:h-[2px] before:bg-white before:top-1/2 relative inline-block hover:before:block">{children}</a>
    </Link>
  )
}
