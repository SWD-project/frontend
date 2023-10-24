'use client'
import CartBag from '@components/common/theme/icons/cart-bag'
import ShoppingBagOutlined from '@components/common/theme/icons/shopping-bag-outlined'
import MiniCart from '@components/common/theme/mini-cart'
import { GetCartResponse } from '@lib/model/cart/get-cart'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import { Fragment, useState } from 'react'
export const CartSideNav = ({ cartData }: { cartData?: GetCartResponse }) => {
  const theme = useTheme()
  const [sidenavOpen, setSidenavOpen] = useState(false)
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen)

  const DIALOG_DRAWER = (
    <Fragment>
      <Drawer open={sidenavOpen} anchor='right' onClose={toggleSidenav} sx={{ zIndex: 9999 }}>
        <MiniCart toggleSidenav={toggleSidenav} cartData={cartData}/>
      </Drawer>
    </Fragment>
  )

  return (
    <>
      <Badge badgeContent={cartData?.cartDetailList.length || 0} color='primary'>
        <Box p={1.25} bgcolor='#F3F5F9' component={IconButton} onClick={toggleSidenav} disabled={!cartData}>
          <ShoppingBagOutlined />
        </Box>
      </Badge>
      {DIALOG_DRAWER}
    </>
  )
}
