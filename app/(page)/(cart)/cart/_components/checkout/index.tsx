'use client'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import { H1, Span } from '@components/common/theme/typography'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import CheckoutPayment from './payment'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import { createPaymentUrl } from '@lib/VNPAY'
import { useSnackbar } from 'notistack'
import Card1 from '@components/common/theme/card1'
import { useCheckout } from 'hook/use-checkout'
import { config } from '@lib/model'
export const Checkout = () => {
  const searchParams = useSearchParams()
  const total = +(searchParams.get('total') as string)
  const id = searchParams.get('id') as string
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()

  const checkoutFunc = async() => {
    const res = await useCheckout({
      cartDetailId: id.split('-'),
      payment: config.vnpay
    })
    if (res.status === 'success') {
      router.push('/success')
    }
  }
  useEffect(() => {
    const amount = searchParams.get('vnp_Amount')
    const status = searchParams.get('vnp_TransactionStatus')
    if (amount !== null && status !== null) {
      if (status === '00') {
        checkoutFunc()
      } else {
        enqueueSnackbar('Payment fail', { variant: 'error' })
      }
    }
  }, [searchParams])
  return (
    <Card1 sx={{ padding: 2 }}>
      <CheckoutPayment setIsChecked={setIsChecked} />
      <FlexBetween mb={1}>
        <Typography fontSize='18px' fontWeight='600' lineHeight='1'></Typography>
      </FlexBetween>
      <Divider />
      <FlexBetween mb={2} marginTop={0.5}>
        <Span color='grey.600'>Total:</Span>

        <Span fontSize={18} fontWeight={600} lineHeight='1'>
          ${total}
        </Span>
      </FlexBetween>
      {/* <ApplyCouponButton /> */}
      <Button
        variant='contained'
        color='primary'
        fullWidth
        disabled={!isChecked || total <= 0}
        onClick={() => {
          localStorage.setItem('id', id || '')
          const url = createPaymentUrl(+total * 24500, `http://localhost:3000/cart`)
          router.push(url)
        }}
      >
        Complete
      </Button>
    </Card1>
  )
}
