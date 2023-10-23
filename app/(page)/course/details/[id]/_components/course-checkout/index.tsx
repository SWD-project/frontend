'use client'
import Card1 from '@components/common/theme/card1'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Image from '@components/common/theme/image'
import { H1, H2, H3 } from '@components/common/theme/typography'
import LoadingButton from '@mui/lab/LoadingButton'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { GetCourseResponse } from '@lib/model/course/get-course'
import { useState } from 'react'
import { useAddToCart } from 'hook/cart/use-add-to-cart'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'

export const CourseCheckout = ({ course }: { course: GetCourseResponse }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const handleClick = async () => {
    try {
      setIsLoading(true)
      const res = await useAddToCart({ courseId: course._id })

      if (res.status === 'error') {
        enqueueSnackbar(res.message, { variant: 'error' })
      } else {
        enqueueSnackbar('Adding success', { variant: res.status })
      }
    } catch (error) {
      enqueueSnackbar('Adding fail, you must login first', { variant: 'error' })
    } finally {
      setIsLoading(false)
      router.refresh()
    }
  }
  return (
    <Card1 sx={{ boxShadow: '0px 0px 5px gray', position: 'fixed' }}>
      <Stack spacing={1}>
        <Image
          src={course.thumbnailUrl}
          sx={{
            objectFit: 'cover',
            objectPosition: 'center',
            width: 370
          }}
        />
        <FlexBox alignItems={'center'}>
          <H1 color='primary.main'>${course.price - (course.price * course.discountPercent) / 100}</H1>
          {course.discountPercent !== 0 ? (
            <H3 sx={{ color: 'gray', marginLeft: 1, textDecorationLine: 'line-through', fontWeight: 500 }}>
              ${course.price}
            </H3>
          ) : (
            <></>
          )}
        </FlexBox>
        {course.discountPercent !== 0 ? (
          <Typography color={'gray'} sx={{ fontSize: '1.1rem', marginTop: '0px !important' }}>
            {course.discountPercent}% sale off
          </Typography>
        ) : (
          <></>
        )}
        <LoadingButton
          color='primary'
          variant='contained'
          loading={isLoading}
          sx={{
            fontSize: '1rem',
            fontWeight: 700
          }}
          onClick={handleClick}
        >
          Add to cart
        </LoadingButton>
      </Stack>
    </Card1>
  )
}
