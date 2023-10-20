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
import { ProductCard21 } from '@components/product/product-card-21'
import DeleteOutline from '@mui/icons-material/DeleteOutline'

type MiniCartProps = { toggleSidenav: () => void; expiredData: any }

const MiniCart = ({ toggleSidenav, expiredData }: MiniCartProps) => {
  const [openRemoveDialog, setOpenRemoveDialog] = useState<String | null>(null)
  const [isRemoveItem, setIsRemoveItem] = useState(false)

  const testData = [
    {
      _id: '652ba850bd3c6e9638c45afe',
      lectureId: '652ba545bd3c6e9638c45ad0',
      title: 'Cartoon Drawing For Absolute Beginners',
      rating: 0,
      description:
        'Learn how to draw cute cartoon characters quick and easy. Improve your art skills. Perfect for beginner artists.',
      price: 40,
      discountPercent: 20,
      thumbnailUrl: 'https://img-c.udemycdn.com/course/750x422/1332076_03f5_4.jpg',
      outcome:
        'Understand Cartoon Characters Anatomy-Create your own comic book characters-Create 2D Cute Characters-Develop your own style',
      courseStatus: 1,
      totalLesson: 0,
      level: 1,
      categoryId: '651e06337d2c1c9dcd655edb',
      createdAt: '2023-10-15T08:52:32.359Z',
      updatedAt: '2023-10-15T08:52:32.359Z',
      __v: 0
    }
  ]
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

          {testData.length === 0 && (
            <FlexBox alignItems='center' flexDirection='column' justifyContent='center' height='calc(100% - 74px)'>
              <LazyImage width={90} height={100} alt='banner' src='/assets/images/logos/shopping-bag.svg' />
              <Box component='p' mt={2} color='grey.600' textAlign='center' maxWidth='200px'>
                Your shopping bag is empty Start shopping
              </Box>
            </FlexBox>
          )}
        </Box>
        {testData.map(course => (
          <Box sx={{ position: 'relative' }} m={2.5}>
            <ProductCard21 course={course} />
            <IconButton
              size='small'
              sx={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}
              onClick={() => {
                setOpenRemoveDialog(course._id)
              }}
            >
              <DeleteOutline color='primary' />
            </IconButton>
          </Box>
        ))}
        {testData.length !== 0 && (
          <Box m={2.5}>
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
        open={Boolean(openRemoveDialog)}
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
