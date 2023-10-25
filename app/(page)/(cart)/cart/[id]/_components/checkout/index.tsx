'use client'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import { H1, Span } from '@components/common/theme/typography'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import CheckoutPayment from './payment'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from 'react'
import { createPaymentUrl } from '@lib/VNPAY'
import { useSnackbar } from 'notistack'
import Card1 from '@components/common/theme/card1'
import { useCheckout } from 'hook/use-checkout'
import { config } from '@lib/model'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const getPage = (params: URLSearchParams) => {
  return {
    total: Number.parseInt(params.get('total') !== null ? (params.get('total') as string) : ''),
    id: params.get('id') !== null ? (params.get('id') as string) : ''
  }
}
export const Checkout = () => {
  const params = decodeURIComponent(useParams().id as string)
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const { total, id } = getPage(new URLSearchParams(params))

  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  const { enqueueSnackbar } = useSnackbar()

  const checkoutFunc = async () => {
    try {
      setIsLoading(true)
      const res = await useCheckout({
        cartDetailId: id.split('-'),
        payment: config.vnpay
      })
      console.log(res)
      if (res.status === 'success') {
        router.push('/success')
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
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
          const url = createPaymentUrl(+total * 24500, `http://localhost:3000/cart/${params}`)
          router.push(url)
        }}
      >
        Complete
      </Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => {
          setIsLoading(false)
        }}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Card1>
  )
}
