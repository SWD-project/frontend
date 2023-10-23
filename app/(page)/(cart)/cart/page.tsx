import { H1, Span } from '@components/common/theme/typography'
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
const testData = [
  {
    _id: '652ba850bd3c6e9638c45afe',
    lectureId: {
      _id: '652ba545bd3c6e9638c45ad0',
      firstName: 'lara',
      lastName: 'key',
      roleId: '1',
      email: 'number20@gmail.com',
      uuid: 'HJjC4VUMHHXyhDVAgKgNFN33t2j2',
      createdAt: '2023-10-15T08:39:33.366Z',
      updatedAt: '2023-10-15T08:39:33.366Z',
      __v: 0
    },
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
    level: 2,
    categoryId: '651e06337d2c1c9dcd655edb',
    createdAt: '2023-10-15T08:52:32.359Z',
    updatedAt: '2023-10-15T08:52:32.359Z',
    __v: 0
  }
]

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
