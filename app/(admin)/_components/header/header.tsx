'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import { H2 } from '@components/common/theme/typography'

export const layoutConstant = {
  topbarHeight: 40,
  headerHeight: 80,
  mobileNavHeight: 64,
  containerWidth: 1376,
  mobileHeaderHeight: 64,
  grocerySidenavWidth: 280
}
// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: 'relative',
  height: layoutConstant.headerHeight,
  transition: 'height 250ms ease-in-out',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    height: layoutConstant.mobileHeaderHeight
  }
}))

const StyledContainer = styled(Container)({
  gap: 2,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

// ==============================================================
type HeaderProps = {
  isFixed?: boolean
  className?: string
  searchInput: ReactElement
  children: ReactNode
}
// ==============================================================

const Header = ({ isFixed, className, searchInput, children }: HeaderProps) => {
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
          <H2>DrawDemy</H2>
          <div></div>
          {children}
      </StyledContainer>
    </HeaderWrapper>
  )
}

export default Header
