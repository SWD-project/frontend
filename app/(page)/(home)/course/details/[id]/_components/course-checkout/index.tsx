'use client'
import Card1 from '@components/common/theme/card1'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Image from '@components/common/theme/image'
import { H1, H3 } from '@components/common/theme/typography'
import LoadingButton from '@mui/lab/LoadingButton'
import Typography from '@mui/material/Typography'
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
        <FlexBox>
          <H1>$100</H1>
          <H1 sx={{ color: 'gray', marginLeft: 1, textDecorationLine: 'line-through' }}>$200</H1>
        </FlexBox>
        <Typography sx={{ fontSize: '1.1rem'}}>Sale of 50%</Typography>
        <LoadingButton
          color='primary'
          variant='contained'
          sx={{
            fontSize: '1rem',
            fontWeight: 700
          }}
        >
          Add to cart
        </LoadingButton>
      </Stack>
    </Card1>
  )
}
