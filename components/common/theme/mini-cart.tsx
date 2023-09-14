'use client'
import { useState } from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import Clear from '@mui/icons-material/Clear'

import LoadingButton from '@mui/lab/LoadingButton'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'

import CartBag from './icons/cart-bag'
import { Paragraph } from './typography'
import LazyImage from './lazy-image'
import FlexBetween from './flex-box/flex-between'
import FlexBox from './flex-box/flex-box'

type MiniCartProps = { toggleSidenav: () => void; expiredData: any }

const MiniCart = ({ toggleSidenav, expiredData }: MiniCartProps) => {
  const shouldFetchData = true
  const [openRemoveDialog, setOpenRemoveDialog] = useState(false)
  const [isRemoveItem, setIsRemoveItem] = useState(false)
  //   const removeItem = useRemoveItem()
  return (
    <>
      <Box width='100%' maxWidth={380}>
        <Box overflow='auto'>
          <FlexBetween mx={3} height={74}>
            <FlexBox gap={1} alignItems='center' color='secondary.main'>
              <CartBag color='inherit' />

              <Paragraph lineHeight={0} fontWeight={600}>
                item
              </Paragraph>
            </FlexBox>

            <IconButton onClick={toggleSidenav}>
              <Clear />
            </IconButton>
          </FlexBetween>

          <Divider />

          {true && (
            <FlexBox alignItems='center' flexDirection='column' justifyContent='center' height='calc(100% - 74px)'>
              <LazyImage width={90} height={100} alt='banner' src='/assets/images/logos/shopping-bag.svg' />
              <Box component='p' mt={2} color='grey.600' textAlign='center' maxWidth='200px'>
                Your shopping bag is empty Start shopping
              </Box>
            </FlexBox>
          )}
        </Box>

        {!true && (
          <Box p={2.5}>
            <Link href='/checkout' passHref>
              <Button
                fullWidth
                color='primary'
                variant='contained'
                sx={{ mb: '0.75rem', height: '40px' }}
                onClick={toggleSidenav}
              >
                Checkout Now
              </Button>
            </Link>

            <Link href='/cart' passHref>
              <Button fullWidth color='primary' variant='outlined' sx={{ height: 40 }} onClick={toggleSidenav}>
                View Cart
              </Button>
            </Link>
          </Box>
        )}
      </Box>
      <Dialog
        sx={{
          zIndex: 9999
        }}
        open={openRemoveDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Remove item</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Do you want to remove this product from the shopping cart
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Disagree</Button>
          <LoadingButton loading={isRemoveItem} color='error' sx={{ px: 4 }} autoFocus>
            Agree
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MiniCart
