"use client"
import { Fragment } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Person from '@mui/icons-material/Person'
import Place from '@mui/icons-material/Place'
import Key from '@mui/icons-material/Key';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'
import { usePathname } from 'next/navigation'
import NavLink, { NavLinkProps } from '@components/common/theme/nav-link/nav-link'
import FlexBox from '@components/common/theme/flex-box/flex-box'


// custom styled components
const MainContainer = styled(Card)(({ theme }) => ({
    paddingBottom: '1.5rem',
    [theme.breakpoints.down('md')]: {
        boxShadow: 'none',
        overflowY: 'auto',
        height: 'calc(100vh - 64px)',
    },
}))

type StyledNavLinkProps = { isCurrentPath: boolean }

const StyledNavLink = styled(
    ({ children, isCurrentPath, ...rest }: StyledNavLinkProps & NavLinkProps) => (
        <NavLink {...rest}>{children}</NavLink>
    )
)<StyledNavLinkProps>(({ theme, isCurrentPath }) => ({
    display: 'flex',
    alignItems: 'center',
    borderLeft: '4px solid',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    marginBottom: '1.25rem',
    justifyContent: 'space-between',
    color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
    borderColor: isCurrentPath ? theme.palette.primary.main : 'transparent',
    '&:hover': {
        borderColor: theme.palette.primary.main,
        color: isCurrentPath ? theme.palette.primary.main : theme.palette.grey[600],
        '& .nav-icon': { color: theme.palette.primary.main },
    },
}))

const Navigations = () => {
    const pathName = usePathname()
    return (
        <MainContainer>
            {linkList.map((item) => (
                <Fragment key={item.title}>
                    <Typography p="26px 30px 1rem" color="grey.600" fontSize="12px">
                        {item.title}
                    </Typography>

                    {item.list.map((item) => (
                        <StyledNavLink
                            href={item.href}
                            key={item.title}
                            isCurrentPath={pathName.includes(item.href)}
                        >
                            <FlexBox alignItems="center" gap={1}>
                                <item.icon
                                    color="inherit"
                                    fontSize="small"
                                    className="nav-icon"
                                />
                                <span>{item.title}</span>
                               
                            </FlexBox>

                        </StyledNavLink>
                    ))}
                </Fragment>
            ))
            }
        </MainContainer>
    )
}

const linkList = [
    {
        title: 'DASHBOARD',
        list: [
            { href: '/orders', title: 'Orders', icon: ShoppingBagOutlined, count: 0 },
        ],
    },
    {
        title: 'ACCOUNT SETTINGS',
        list: [
            { href: '/profile', title: 'Profile Info', icon: Person, count: 0 },
        ],
    }
]

//     linkList: [
//       {
//         title: 'ទាំងគ្រប់គ្រង',
//         list: [
//           { href: '/orders', title: 'ការបញ្ជាទិញ', icon: ShoppingBagOutlined, count: 0 },
//           // {
//           //   href: '/wish-list',
//           //   title: 'Wishlist',
//           //   icon: FavoriteBorder,
//           //   count: 0,
//           // },
//         ],
//       },
//       {
//         title: 'ការកំណត់គណនី',
//         list: [
//           { href: '/profile', title: 'ព័ត៌មានផ្ទាល់ខ្លួន', icon: Person, count: 0 },
//           { href: '/address', title: 'អាសយដ្ឋាន', icon: Place, count: 0 },
//           { href: '/password', title: 'ពាក្យសម្ងាត់', icon: Key, count: 0}
//           // {
//           //   href: '/payment-methods',
//           //   title: 'Payment Methods',
//           //   icon: CreditCard,
//           //   count: 0,
//           // },
//         ],
//       },
//       {
//         title: 'ការគ្រប់គ្រងដឹកជញ្ជូន',
//         list: [
//           {
//             href: '/shipping-account',
//             title: 'គណនីដឹកជញ្ជូន',
//             icon: Person,
//             count: 0,
//           },
//         ],
//       },


export default Navigations
