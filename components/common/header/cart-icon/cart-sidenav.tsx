"use client"
import CartBag from '@components/common/theme/icons/cart-bag'
import ShoppingBagOutlined from '@components/common/theme/icons/shopping-bag-outlined'
import MiniCart from '@components/common/theme/mini-cart'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Fragment, useState } from "react"
export const CartSideNav = ({ cartData }: {
    cartData: any
}) => {
    
    const theme = useTheme()
    const downMd = useMediaQuery(theme.breakpoints.down(1150))
    const [sidenavOpen, setSidenavOpen] = useState(false)
    const toggleSidenav = () => setSidenavOpen(!sidenavOpen)

    const DIALOG_DRAWER = (
        <Fragment>
            <Drawer
                open={sidenavOpen}
                anchor="right"
                onClose={toggleSidenav}
                sx={{ zIndex: 9999 }}
            >
                <MiniCart toggleSidenav={toggleSidenav} expiredData={undefined}/>
            </Drawer>
        </Fragment>
    )
    if (downMd) {
        const ICON_STYLE = { color: 'grey.600', fontSize: 20 }
        return (
            <>
                <Box component={IconButton} onClick={toggleSidenav}>
                    <Badge
                        badgeContent={cartData?.lineItems?.length || 0}
                        color="primary"
                    >
                        <CartBag sx={ICON_STYLE} />
                    </Badge>
                </Box>
                {DIALOG_DRAWER}
            </>
        )
    }
    return (
        <>
            <Badge
                badgeContent={cartData?.lineItems?.length || 0}
                color="primary"
            >
                <Box
                    p={1.25}
                    bgcolor="#F3F5F9"
                    component={IconButton}
                    onClick={toggleSidenav}
                >
                    <ShoppingBagOutlined />
                </Box>
            </Badge>
            {DIALOG_DRAWER}
        </>
    )
}