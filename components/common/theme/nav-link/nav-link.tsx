"use client"
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnchorHTMLAttributes, CSSProperties } from 'react'

// component props interface
export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  style?: CSSProperties
  className?: string
}

// styled component
const StyledLink = styled(Link)<{ active_route?: string }>(
  ({ theme, active_route }) => ({
    position: 'relative',
    transition: 'color 150ms ease-in-out',
    color: active_route === 'active' ? theme.palette.primary.main : 'inherit',
    '&:hover': { color: `${theme.palette.primary.main} !important` },
  })
)

const NavLink = ({
  href,
  children,
  style,
  className,
  ...props
}: NavLinkProps) => {

  // const checkRouteMatch = () => {
  //   if (href === '/') return pathname === href
  //   return pathname.includes(href)
  // }
  // active route
  // const currentRoute = checkRouteMatch()
  const currentRoute = true
  return (
    <>
      {/*<Link href={href} passHref>*/}
      <StyledLink
        href={href}
        style={style}
        className={clsx(className)}
        active_route={currentRoute ? 'active' : ''}
        {...props}
      >
        {children}
      </StyledLink>
      {/*</Link>*/}
    </>
  )
}

export default NavLink
