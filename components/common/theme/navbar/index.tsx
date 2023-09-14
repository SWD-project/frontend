'use client'
import Card from '@components/common/theme/card'
import CategoryMenu from '@components/common/theme/category/category-menu'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Category from '@components/common/theme/icons/category'
import NavLink from '@components/common/theme/nav-link/nav-link'
import { Paragraph } from '@components/common/theme/typography'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ChevronRight from '@mui/icons-material/ChevronRight'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import { SvgIconProps } from '@mui/material/SvgIcon'
import { styled } from '@mui/material/styles'
import navbarNavigations from 'config/navbar-navigations'

// NavList props interface
type Navs = {
  url: string
  title: string
  Icon?: (props: SvgIconProps<'svg', {}>) => JSX.Element
}

type NavList = {
  url: string
  title: string
  child: Navs[]
  megaMenu: boolean
  megaMenuWithSub: boolean
}

// const common css style
const navLinkStyle = {
  cursor: 'pointer',
  transition: 'color 150ms ease-in-out',
  '&:hover': { color: 'primary.main' },
  '&:last-child': { marginRight: 0 }
}
// style components
const StyledNavLink = styled(NavLink)({ ...navLinkStyle })

const ParentNav = styled(Box)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
    '& > .parent-nav-item': { display: 'block' }
  }
}))

const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: '100%',
  paddingLeft: 8,
  display: 'none',
  position: 'absolute',
  [theme.breakpoints.down(1640)]: {
    right: '100%',
    left: 'auto',
    paddingRight: 8
  }
}))

const NavBarWrapper = styled(Card)<{ border: number }>(({ theme, border }) => ({
  height: '60px',
  display: 'block',
  borderRadius: '0px',
  position: 'relative',
  ...(border && { borderBottom: `1px solid ${theme.palette.grey[200]}` }),
  [theme.breakpoints.down(1150)]: { display: 'none' }
}))

const InnerContainer = styled(Container)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const CategoryMenuButton = styled(Button)(({ theme }) => ({
  width: '278px',
  height: '40px',
  backgroundColor: `${theme.palette.grey[100]} !important`
  // backgroundColor: "red"
}))

const ChildNavsWrapper = styled(Box)({
  zIndex: 5,
  left: '50%',
  top: '100%',
  display: 'none',
  position: 'absolute',
  transform: 'translate(-50%, 0%)'
})

// ==========================================================
type NavbarProps = {
  border?: number
  elevation?: number
  navListOpen?: boolean
  hideCategories?: boolean
}
// ==========================================================

const Navbar = ({ navListOpen = false, hideCategories = false, elevation = 2, border }: NavbarProps) => {
  const renderNestedNav = (list: any[] = [], isRoot = false) => {
    return list.map((nav: NavList) => {
      if (isRoot) {
        if (nav.url) {
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              sx={{
                color: 'grey.700'
              }}
            >
              {nav.title}
            </StyledNavLink>
          )
        }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems='center'
              position='relative'
              flexDirection='column'
              sx={{
                '&:hover': { '& > .child-nav-item': { display: 'block' } }
              }}
            >
              <FlexBox alignItems='flex-end' gap={0.3} sx={navLinkStyle}>
                {nav.title}
                <KeyboardArrowDown sx={{ color: 'grey.500', fontSize: '1.1rem' }} />
              </FlexBox>

              <ChildNavsWrapper className='child-nav-item'>
                <Card elevation={3} sx={{ mt: 2.5, py: 1, minWidth: 200 }}>
                  {renderNestedNav(nav.child)}
                </Card>
              </ChildNavsWrapper>
            </FlexBox>
          )
        }
      } else {
        if (nav.url) {
          return <NavLink href={nav.url} key={nav.title}></NavLink>
        }

        if (nav.child) {
          return (
            <ParentNav position='relative' minWidth='230px' key={nav.title}>
              <MenuItem color='grey.700'>
                <Box flex='1 1 0' component='span'>
                  {nav.title}
                </Box>
                <ArrowRight fontSize='small' />
              </MenuItem>

              <ParentNavItem className='parent-nav-item'>
                <Card sx={{ py: '0.5rem', minWidth: '230px' }} elevation={3}>
                  {renderNestedNav(nav.child)}
                </Card>
              </ParentNavItem>
            </ParentNav>
          )
        }
      }
    })
  }

  return (
    <NavBarWrapper hovereffect='false' elevation={elevation} border={border || 0}>
      {!hideCategories ? (
        <InnerContainer>
          {/* Category megamenu */}
          <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant='text'>
              <Category fontSize='small' />
              <Paragraph fontWeight='600' textAlign='left' flex='1 1 0' ml={1.25} color='grey.600'>
                Stores
              </Paragraph>

              <ChevronRight className='dropdown-icon' fontSize='small' />
            </CategoryMenuButton>
          </CategoryMenu>

          {/* Horizontal menu */}
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer sx={{ justifyContent: 'center' }}>
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  )
}

export default Navbar
