'use client'
import { useState } from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import Clear from '@mui/icons-material/Clear'

import CartBag from './icons/cart-bag'
import { Paragraph } from './typography'
import LazyImage from './lazy-image'
import FlexBetween from './flex-box/flex-between'
import FlexBox from './flex-box/flex-box'
import { ProductCard21 } from '@components/product/product-card-21'
import { GetCartResponse } from '@lib/model/cart/get-cart'

type MiniCartProps = { toggleSidenav: () => void; cartData?: GetCartResponse }

const MiniCart = ({ toggleSidenav, cartData }: MiniCartProps) => {
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

          {cartData?.cartDetailList.length === 0 && (
            <FlexBox alignItems='center' flexDirection='column' justifyContent='center' height='calc(100% - 74px)'>
              <LazyImage width={90} height={100} alt='banner' src='/assets/images/logos/shopping-bag.svg' />
              <Box component='p' mt={2} color='grey.600' textAlign='center' maxWidth='200px'>
                Your shopping bag is empty Start shopping
              </Box>
            </FlexBox>
          )}
        </Box>
        {cartData?.cartDetailList.map(course => (
          <Box sx={{ position: 'relative' }} m={2.5}>
            <ProductCard21 course={course.courseId} />
          </Box>
        ))}
        {cartData?.cartDetailList.length !== 0 && (
          <Box m={2.5}>
            <Link href='/cart/total=0' passHref>
              <Button  fullWidth color='primary' variant='outlined' sx={{ height: 40, width: 250 }} onClick={toggleSidenav}>
                View Cart
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </>
  )
}

export default MiniCart
