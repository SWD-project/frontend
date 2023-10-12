'use client'
import { H4, Span } from '@components/common/theme/typography'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import FlexBox from '@components/common/theme/flex-box/flex-box'
import Box from '@mui/material/Box'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
export const CourseDetail = () => {
  return (
    <Stack spacing={2}>
      <Typography fontSize={'3rem'}>The Complete Python Bootcamp From Zero to Hero in Python</Typography>
      <Typography>
        Learn Python like a Professional Start from the basics and go all the way to creating your own applications and
        games
      </Typography>
      <FlexBox alignItems={'center'}>
        <Rating name='half-rating-read' defaultValue={4.6} precision={0.5} readOnly />
        (480,973 ratings)
      </FlexBox>
      <Box>
        Create By <Span color='red' fontSize={'1rem'}>Jose Portilla</Span>
      </Box>
      <FlexBox alignItems={'center'} >
        <NewReleasesIcon/>
        Last Updated 
        <Typography marginLeft={'10px'}> 7/2023</Typography>
      </FlexBox>
    </Stack>
  )
}
