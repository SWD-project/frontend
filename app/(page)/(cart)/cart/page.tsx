import { H1 } from '@components/common/theme/typography'
import Grid from '@mui/material/Grid'
import { ItemList } from './_components/item-list'
import { Checkout } from './_components/checkout'
import { getCart } from '@lib/cart/get-cart'
import { getAccessToken } from '@lib/handler/user-cookie'
import { cookies } from 'next/headers'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and BigCommerce.',
  title: 'Cart',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
}
export default async function Cart() {
  const accessToken = getAccessToken(cookies())
  const cartData = await getCart(accessToken, {})
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <H1 color='primary.main' mr={1} lineHeight='1'>
            Shopping cart
          </H1>
        </Grid>
        {/* CART PRODUCT LIST */}
        <Grid item md={8} xs={12}>
          <ItemList itemList={cartData.data[0]?.cartDetailList} />
        </Grid>

        {/* CHECKOUT FORM */}
        <Grid item md={4} xs={12}>
          <Checkout />
        </Grid>
      </Grid>
    </>
  )
}
