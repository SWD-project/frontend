'use client'
import Card1 from '@components/common/theme/card1'
import Image from '@components/common/theme/image'
import { H1, H3 } from '@components/common/theme/typography'
import LoadingButton from '@mui/lab/LoadingButton'
import Stack from '@mui/material/Stack'

export const CourseCheckout = () => {
  return (
    <Card1 sx={{ boxShadow: '0px 0px 5px gray' }}>
      <Stack spacing={1}>
        <Image
          src='https://th.bing.com/th/id/OIP.D0yFfByllv1FGGCTh66vGAHaD4?pid=ImgDet&rs=1'
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: 386
          }}
        />
        <H1>$100</H1>
        <LoadingButton color='primary' variant='contained' sx={{
            fontSize: "1rem",
            fontWeight: 700
        }}>
          Add to cart
        </LoadingButton>
      </Stack>
    </Card1>
  )
}
