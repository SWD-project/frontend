'use client'
import { H1, H2, H4 } from '@components/common/theme/typography'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Box from '@mui/material/Box'
export const CourseDetail = () => {
  return (
    <Stack spacing={2}>
      <Typography fontSize={'2rem'}>The Complete Python Bootcamp From Zero to Hero in Python</Typography>
      <H4>
        Learn Python like a Professional Start from the basics and go all the way to creating your own applications and
        games
      </H4>
      <FlexBox>
        <Rating name='half-rating-read' defaultValue={4.6} precision={0.5} readOnly />
        (480,973 ratings)
      </FlexBox>
      <Box>Create By Jose Portilla</Box>
      <Paper>
        <Typography variant='h3'>What you'll learn</Typography>
      </Paper>
    </Stack>
  )
}
