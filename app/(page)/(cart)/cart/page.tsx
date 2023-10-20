import Card from '@components/common/theme/card'
import FlexBetween from '@components/common/theme/flex-box/flex-between'
import { Span } from '@components/common/theme/typography'
import ProductCard7 from '@components/product/product-card-7'
import { Course } from '@lib/model/course'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

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

export default async function Cart() {
  return (
    <>
      <Grid container spacing={3}>
        {/* CART PRODUCT LIST */}
        <Grid item md={8} xs={12}>
          {testData.map((item: Course) => (
            <ProductCard7 key={item._id} item={item} />
          ))}
        </Grid>

        {/* CHECKOUT FORM */}
        <Grid item md={4} xs={12}>
          <Card sx={{ padding: 3, height: 140 }}>
            <FlexBetween mb={1}>
              <Typography fontSize='18px' fontWeight='600' lineHeight='1'>
                {/* {currency(data.body?.extraFee || 0)} */}
              </Typography>
            </FlexBetween>
            <FlexBetween mb={2}>
              <Span color='grey.600'>Total:</Span>

              <Span fontSize={18} fontWeight={600} lineHeight='1'>
                {/* {currency(data.body?.totalPrice)} */}
              </Span>
            </FlexBetween>
            {/* <ApplyCouponButton /> */}
            <Link href='/checkout'>
              <Button variant='contained' color='primary' fullWidth>
                Checkout Now
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
