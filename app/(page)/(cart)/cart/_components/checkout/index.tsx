'use client'
import Card from '@components/common/theme/card'
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
export const Checkout = () => {
  const searchParams = useSearchParams()
  const total = +(searchParams.get('total') as string)
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const amount = searchParams.get('vnp_Amount')
    const status = searchParams.get('vnp_TransactionStatus')
    console.log(amount, status)
    if (amount !== null && status !== null) {
      if (status === '00') {
        router.push('/success')
      } else {
        enqueueSnackbar('Payment fail', { variant: 'error' })
      }
    }
  }, [searchParams])
  return (
    <Card sx={{ padding: 2 }}>
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
          const url = createPaymentUrl(+total * 24500, `http://localhost:3000/cart`)
          router.push(url)
        }}
      >
        Complete
      </Button>
    </Card>
  )
}
