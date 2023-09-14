'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactElement, ReactNode, useState } from 'react'

import Image from '@components/common/theme/image'
import { Paragraph } from '@components/common/theme/typography'
import Clear from '@mui/icons-material/Clear'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import FlexBetween from '../theme/flex-box/flex-between'
import FlexBox from '../theme/flex-box/flex-box'
import Search from '../theme/icons/search'
import CategoryMenu from '../theme/category/category-menu'
import Category from '../theme/icons/category'

export const layoutConstant = {
  topbarHeight: 40,
  headerHeight: 80,
  mobileNavHeight: 64,
  containerWidth: 1200,
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
  const theme = useTheme()
  const [searchBarOpen, setSearchBarOpen] = useState(false)
  const downMd = useMediaQuery(theme.breakpoints.down(1150))

  const toggleSearchBar = () => setSearchBarOpen(!searchBarOpen)

  // FOR SMALLER DEVICE
  if (downMd) {
    const ICON_STYLE = { color: 'grey.600', fontSize: 20 }

    return (
      <HeaderWrapper className={clsx(className)}>
        <StyledContainer>
          <FlexBetween width='100%'>
            {/* LEFT CONTENT - NAVIGATION ICON BUTTON */}

            {/* MIDDLE CONTENT - LOGO */}
            <Link href='/'>
              <Image
                sx={{
                  height: '44px'
                }}
                src='/assets/images/logo-v2.png'
                alt='logo'
              />
            </Link>

            {/* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */}
            <FlexBox justifyContent='end' flex={1}>
              <Box component={IconButton} onClick={toggleSearchBar}>
                <Search sx={ICON_STYLE} />
              </Box>
              {children}
            </FlexBox>
          </FlexBetween>

          {/* SEARCH FORM DRAWER */}
          <Drawer
            open={searchBarOpen}
            anchor='top'
            onClose={toggleSearchBar}
            // onClick={}
            sx={{ zIndex: 9999 }}
          >
            <Box sx={{ width: 'auto', padding: 2, height: '100vh' }}>
              <FlexBetween mb={1}>
                <Paragraph>Search to Fado168</Paragraph>

                <IconButton onClick={toggleSearchBar}>
                  <Clear />
                </IconButton>
              </FlexBetween>

              {/* CATEGORY BASED SEARCH FORM */}
              {searchInput}
            </Box>
          </Drawer>
        </StyledContainer>
      </HeaderWrapper>
    )
  }

  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        {/* LEFT CONTENT - LOGO AND CATEGORY */}
        <FlexBox mr={2} minWidth='170px' alignItems='center'>
          <Link href='/'>
            <Image
              sx={{
                height: '44px'
              }}
              src='/assets/images/logo-v2.png'
              alt='logo'
            />
          </Link>

          {/* SHOW DROP DOWN CATEGORY BUTTON WHEN HEADER FIXED */}
          {isFixed && (
            <CategoryMenu>
              <FlexBox color='grey.600' alignItems='center' ml={2}>
                <Button color='inherit'>
                  <Category fontSize='small' color='inherit' />
                  <KeyboardArrowDown fontSize='small' color='inherit' />
                </Button>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        {/* SEARCH FORM */}
        <FlexBox justifyContent='center' flex='1 1 0'>
          {searchInput}
        </FlexBox>

        {/* LOGIN AND CART BUTTON */}
        <FlexBox gap={1.5} alignItems='center'>
          {children}
        </FlexBox>

        {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
      </StyledContainer>
    </HeaderWrapper>
  )
}

export default Header
